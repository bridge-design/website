'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ThemeUIProvider, ThemeUIStyleObject } from 'theme-ui'
import { Box, Button, Checkbox, Flex, Grid, Label } from 'theme-ui'

import { getInputName, parts } from './data'
import { downloadPng } from './downloadPng'
import theme from './theme-ui-object'

interface Part {
  title: string
  parts?: string[]
}

interface Category {
  title: string
  innerColumns?: number
  size?: number
  category?: boolean
  parts: (string | Part)[]
  id?: number
}

type BoxStyle = ThemeUIStyleObject & {
  opacity?: number
  bg?: string
}

const toBox = (parts: Category[]) => {
  return parts.reduce(
    (acc: Category[][], category, i) => {
      const newBox = acc[acc.length - 1]
      let inBox = newBox
        .map((c: Category) => c.size || 1)
        .reduce((a: number, b: number) => a + b, 0)
      category.id = i
      const size = category.size || 1
      if (inBox + size <= 4) {
        newBox.push(category)
      }
      inBox += size
      if (inBox >= 4) {
        acc.push([])
      }
      return acc
    },
    [[]]
  )
}

const partsInBoxes = toBox(parts as Omit<Category, 'id'>[])

const stages = ['cross-out', 'select', 'pick-up', 'done'] as const
type Stage = (typeof stages)[number]

const crossOutLimit = 5
const selectLimit = 5
const pickUpLimit = 25

const instructions = {
  'cross-out': (
    <h2 className="mb-5 mt-5 font-lg text-lg">
      1 of 3: Cross out {crossOutLimit} <em>irrelevant</em> categories.
    </h2>
  ),
  select: (
    <h2 className="mb-5 mt-5 font-lg text-lg">
      2 of 3: Select {selectLimit} <em>most-important</em> categories.
    </h2>
  ),
  'pick-up': (
    <h2 className="mb-5 mt-5 font-lg text-lg">
      3/3 Check up to <em>{pickUpLimit} important parts</em> in previously selected categories.
    </h2>
  ),
  done: <h2 className="mb-5 mt-5 font-lg text-lg">Well done!</h2>,
}

export default function PartsExercise() {
  const [stage, setStage] = useState<Stage>('cross-out')
  const [crossedOut, setCrossedOut] = useState<number[]>([])
  const [selected, setSelected] = useState<number[]>([])
  const [pickedUp, setPickedUp] = useState<string[]>([])
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if any parts values are unchecked and uncheck the corresponding name
    const checkParts = () => {
      ;(parts as Category[]).forEach((category) => {
        if (selected.indexOf(category.id!) !== -1) {
          category.parts.forEach((part: Part | string) => {
            if (typeof part === 'object' && part.parts) {
              const allPartsChecked = part.parts.every(
                (subpart: string) => pickedUp.indexOf(getInputName(category.title, subpart)) !== -1
              )

              const nameChecked = getInputName(category.title, part.title)

              if (!allPartsChecked) {
                if (pickedUp.indexOf(nameChecked) !== -1) {
                  const allPartsUnchecked = part.parts.every(
                    (subpart: string) =>
                      pickedUp.indexOf(getInputName(category.title, subpart)) === -1
                  )

                  if (allPartsUnchecked) {
                    setPickedUp((prevState) => prevState.filter((part) => part !== nameChecked))
                  }
                }
              } else if (allPartsChecked) {
                if (pickedUp.indexOf(nameChecked) === -1) {
                  setPickedUp((prevState) =>
                    prevState.includes(nameChecked) ? prevState : [...prevState, nameChecked]
                  )
                }
              }
            }
          })
        }
      })
    }

    checkParts()
  }, [pickedUp, selected])

  const handleDownloadPng = useCallback(() => {
    downloadPng(ref)
  }, [ref])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setTimeout(() => {
      document.querySelector('#parts-form')?.scrollIntoView({
        behavior: 'smooth',
      })
    }, 100)

    setStage(stages[stages.indexOf(stage) + 1])
  }

  const boxAction = (e: React.MouseEvent, categoryId: number) => {
    switch (stage) {
      case 'cross-out':
        toggleCategoryCrossOut(categoryId)
        break
      case 'select':
        toggleCategorySelect(categoryId)
        break
    }
  }

  const toggleCategoryCrossOut = (categoryId: number) => {
    if (crossedOut.indexOf(categoryId) === -1) {
      if (crossedOut.length === crossOutLimit) {
        // only 5 categories
        return
      }
      setCrossedOut([...crossedOut, categoryId])
    } else {
      setCrossedOut(crossedOut.filter((i) => i !== categoryId))
    }
  }

  const toggleCategorySelect = (categoryId: number) => {
    if (crossedOut.indexOf(categoryId) !== -1) {
      // not for crossed out categories
      return
    }
    if (selected.indexOf(categoryId) === -1) {
      if (selected.length === selectLimit) {
        // only 5 categories
        return
      }
      setSelected([...selected, categoryId])
    } else {
      setSelected(selected.filter((i) => i !== categoryId))
    }
  }

  const actionButton = () => {
    let isButtonDisabled, buttonMessage
    switch (stage) {
      case 'cross-out':
        isButtonDisabled = crossedOut.length !== crossOutLimit
        buttonMessage =
          crossedOut.length === crossOutLimit
            ? 'Next'
            : `Cross out ${crossOutLimit - crossedOut.length} more`
        return (
          <Button type="submit" disabled={isButtonDisabled}>
            {buttonMessage}
          </Button>
        )
      case 'select':
        isButtonDisabled = selected.length !== selectLimit
        buttonMessage =
          selected.length === selectLimit ? 'Next' : `Select ${selectLimit - selected.length} more`
        return (
          <Button type="submit" disabled={isButtonDisabled}>
            {buttonMessage}
          </Button>
        )
      case 'pick-up':
        isButtonDisabled = pickedUp.length !== pickUpLimit
        buttonMessage =
          pickedUp.length === pickUpLimit ? 'Done' : `Pick up ${pickUpLimit - pickedUp.length} more`
        return (
          <Button type="submit" disabled={isButtonDisabled}>
            {buttonMessage}
          </Button>
        )
      case 'done':
        buttonMessage = 'Save your result as a .png file'
        return (
          <Button type="button" onClick={handleDownloadPng}>
            {buttonMessage}
          </Button>
        )
    }
  }

  const drawPartItem = (
    category: Category,
    categoryId: number,
    part: Part | string,
    level: number
  ) => {
    const partTitle = typeof part === 'object' ? part.title : part
    let disabledCheckbox = true

    // allow pick up from selected parts
    if (stage === 'pick-up' && selected.indexOf(categoryId) !== -1) {
      disabledCheckbox = false
    }
    // do not allow over limit
    if (pickedUp.length === pickUpLimit) {
      disabledCheckbox = true
    }
    // checked is always enabled
    if (pickedUp.indexOf(getInputName(category.title, partTitle)) !== -1) {
      disabledCheckbox = false
    }

    const handleClick = () => {
      const clickedPart = getInputName(category.title, partTitle)
      const clickedParts = typeof part === 'object' ? part.parts : undefined
      const partIndex = pickedUp.indexOf(clickedPart)

      if (partIndex !== -1) {
        setPickedUp((prevState) => prevState.filter((part) => part !== clickedPart))
        if (clickedParts) {
          clickedParts.forEach((parts: string) => {
            const subPart = getInputName(category.title, parts)
            setPickedUp((prevState) => prevState.filter((part) => part !== subPart))
            setPickedUp((prevState) => prevState.filter((part) => part !== clickedPart))
          })
        }
      } else {
        setPickedUp((prevState) => [...prevState, clickedPart])
        if (clickedParts) {
          clickedParts.forEach((parts: string) => {
            const subPart = getInputName(category.title, parts)
            setPickedUp((prevState) =>
              prevState.includes(subPart) ? prevState : [...prevState, subPart]
            )
          })
        }
      }
    }

    const isChecked = pickedUp.includes(getInputName(category.title, partTitle))

    return (
      <Label
        sx={{
          my: 1,
          pl: 3 * level,
          color: disabledCheckbox ? 'primary' : 'text',
        }}
        key={getInputName(category.title, partTitle)}
      >
        <Checkbox
          name={getInputName(category.title, partTitle)}
          disabled={disabledCheckbox}
          checked={isChecked}
          onChange={handleClick}
          sx={{
            mr: 1,
            width: '1rem',
            height: '1.4rem',
          }}
        />
        {partTitle}
      </Label>
    )
  }

  return (
    <>
      <ThemeUIProvider theme={theme}>
        <Flex
          ref={ref}
          p={4}
          id="parts-form"
          sx={{
            flexDirection: 'column',
          }}
        >
          {instructions[stage]}
          <form onSubmit={handleSubmit}>
            <Grid gap={4}>
              <Flex
                sx={{
                  flexDirection: 'column',
                  position: 'sticky',
                  bottom: 0,
                  py: 4,
                  bg: 'background',
                }}
              >
                {actionButton()}
              </Flex>
              {partsInBoxes.map((box: Category[]) => (
                <Grid key={box[0]?.title} gap={4} columns={box.length}>
                  {box.map((category) => {
                    const boxStyle: BoxStyle = {
                      display: stage === 'pick-up' ? 'none' : 'block',
                      border: 'thin',
                      borderRadius: 'medium',
                      borderColor: 'grey',
                      transition: 'opacity 0.5s ease-in-out',
                      cursor: 'pointer',
                      ':hover': {
                        bg: 'muted',
                      },
                    }
                    const legendStyle = {}

                    if (crossedOut.indexOf(category.id!) !== -1) {
                      boxStyle.opacity = 0.25
                    }

                    if (selected.indexOf(category.id!) !== -1) {
                      boxStyle.display = 'block'
                      boxStyle.borderColor = 'grey'
                      boxStyle.bg = stage === 'pick-up' ? 'background' : 'muted'
                    }

                    return (
                      <Box
                        key={category.title}
                        className="p-2"
                        as="fieldset"
                        sx={boxStyle}
                        onClick={(e) => {
                          boxAction(e, category.id!)
                        }}
                      >
                        <legend style={legendStyle}>{category.title}</legend>
                        <Grid gap={0} columns={category.innerColumns || 1}>
                          {category.parts.map((part: Part | string) => {
                            const partKey = typeof part === 'object' ? part.title : part
                            return (
                              <Box key={partKey}>
                                {drawPartItem(category, category.id!, part, 0)}
                                {typeof part === 'object' &&
                                  part.parts &&
                                  part.parts.map((subpart: string) =>
                                    drawPartItem(category, category.id!, subpart, 1)
                                  )}
                              </Box>
                            )
                          })}
                        </Grid>
                      </Box>
                    )
                  })}
                </Grid>
              ))}
              {stage !== 'done' ? (
                <Flex
                  sx={{
                    flexDirection: 'column',
                    position: 'sticky',
                    bottom: 0,
                    py: 4,
                    bg: 'background',
                  }}
                >
                  {actionButton()}
                </Flex>
              ) : null}
              <Box>
                Based on <a href="https://medium.com/@nathanacurtis">Nathan Curtis</a>&apos;{' '}
                <a href="https://drive.google.com/file/d/1qXMUXKHaEXnLDOu99GCzTMY2XW6NnPe_/view">
                  PDF
                </a>
                .
              </Box>
            </Grid>
          </form>
        </Flex>
      </ThemeUIProvider>
    </>
  )
}
