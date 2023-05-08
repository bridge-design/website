import { useState, useRef } from "react";
import { useCallback } from "react";
import { toPng } from 'html-to-image';
import format from 'date-fns/format';
import {
    Box,
    Flex,
    Button,
    Checkbox,
    Grid,
    Input,
    Label,
} from "theme-ui";
import { getInputName, parts } from "./Data";

const toBox = (parts) => {
    return parts.reduce(
        (acc, category, i) => {
            const newBox = acc[acc.length - 1];
            let inBox = newBox.map((c) => c.size || 1).reduce((a, b) => a + b, 0);
            category.id = i;
            const size = category.size || 1;
            if (inBox + size <= 4) {
                newBox.push(category);
            }
            inBox += size;
            if (inBox >= 4) {
                acc.push([]);
            }
            return acc;
        },
        [[]]
    );
};

const partsInBoxes = toBox(parts);

const stages = ["cross-out", "select", "pick-up", "done"];
const crossOutLimit = 5;
const selectLimit = 5;
const pickUpLimit = 25;

const instructions = {
    "cross-out": (
        <h2 className="text-xlMedium font-xlMedium tracking-xlMedium leading-xlMedium mb-5 mt-5">
            1 of 3: Cross out {crossOutLimit} <em>irrelevant</em> categories.
        </h2>
    ),
    select: (
        <h2 className="text-xlMedium font-xlMedium tracking-xlMedium leading-xlMedium mb-5 mt-5">
            2 of 3: Select {selectLimit} <em>most-important</em> categories.
        </h2>
    ),
    "pick-up": (
        <h2 className="text-xlMedium font-xlMedium tracking-xlMedium leading-xlMedium mb-5 mt-5">
            3/3 Check up to <em>{pickUpLimit} important parts</em> in previously
            selected categories.
        </h2>
    ),
    done: <h2 className="text-xlMedium font-xlMedium tracking-xlMedium leading-xlMedium mb-5 mt-5">Well done!</h2>,
};

export default function PartsExercise() {
    const [stage, setStage] = useState('cross-out');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [crossedOut, setCrossedOut] = useState([]);
    const [selected, setSelected] = useState([]);
    const [pickedUp, setPickedUp] = useState([]);
    const ref = useRef(null);
    const getFileName = (fileType) => `${format(new Date(), "'SomeName-'HH-mm-ss")}.${fileType}`;

    const downloadPng = useCallback(() => {
            if (ref.current === null) {
                return
            }
            toPng(ref.current, { cacheBust: true })
                .then((dataUrl) => {
                    const link = document.createElement('a')
                    link.download = getFileName('png')
                    link.href = dataUrl
                    link.click()
                })
                .catch((err) => {
                    console.log(err)
                })
        }, [ref])

    const handleSubmit = (e) => {
        e.preventDefault();

        setTimeout(() => {
            document.querySelector('#parts-form').scrollIntoView({
                behavior: 'smooth',
            });
        }, 100);

        if (stage === 'pick-up') {
            sendForm();
        }

        setStage(stages[stages.indexOf(stage) + 1]);
    };

    const boxAction = (e, categoryId) => {
        switch (stage) {
            case 'cross-out':
                toggleCategoryCrossOut(categoryId);
                break;
            case 'select':
                toggleCategorySelect(categoryId);
                break;
        }
    };

    const toggleCategoryCrossOut = (categoryId) => {
        if (crossedOut.indexOf(categoryId) === -1) {
            if (crossedOut.length === crossOutLimit) {
                // only 5 categories
                return;
            }
            setCrossedOut([...crossedOut, categoryId]);
        } else {
            setCrossedOut(crossedOut.filter((i) => i !== categoryId));
        }
    };

    const toggleCategorySelect = (categoryId) => {
        if (crossedOut.indexOf(categoryId) !== -1) {
            // not for crossed out categories
            return;
        }
        if (selected.indexOf(categoryId) === -1) {
            if (selected.length === selectLimit) {
                // only 5 categories
                return;
            }
            setSelected([...selected, categoryId]);
        } else {
            setSelected(selected.filter((i) => i !== categoryId));
        }
    };

    const pickUpPart = (e) => {
        const partId = e.target.name;

        if (pickedUp.indexOf(partId) === -1) {
            if (pickedUp.length === pickUpLimit) {
                return;
            }
            setPickedUp([...pickedUp, partId]);
        } else {
            setPickedUp(pickedUp.filter((i) => i !== partId));
        }
    };

    const actionButton = () => {
        let isButtonDisabled, buttonMessage;
        switch (stage) {
            case 'cross-out':
                isButtonDisabled = crossedOut.length !== crossOutLimit;
                buttonMessage =
                    crossedOut.length === crossOutLimit
                        ? 'Next'
                        : `Cross out ${crossOutLimit - crossedOut.length} more`;
                return (
                    <Button type="submit" disabled={isButtonDisabled} >
                        {buttonMessage}
                    </Button>
                );
            case 'select':
                isButtonDisabled = selected.length !== selectLimit;
                buttonMessage =
                    selected.length === selectLimit
                        ? 'Next'
                        : `Select ${selectLimit - selected.length} more`;
                return (
                    <Button type="submit" disabled={isButtonDisabled} >
                        {buttonMessage}
                    </Button>
                );
            case 'pick-up':
                isButtonDisabled = pickedUp.length !== pickUpLimit;
                buttonMessage =
                    pickedUp.length === pickUpLimit
                        ? "Done"
                        : `Pick up ${pickUpLimit - pickedUp.length} more`;
                return (
                    <Button type="submit" disabled={isButtonDisabled}>
                        {buttonMessage}
                    </Button>
                );
            case 'done':
                // isButtonDisabled = screenShot === true; disabled={isButtonDisabled}
                buttonMessage = "Save your result as a .png file";
                return (
                    <Button type="button" onClick={downloadPng}>
                        {buttonMessage}
                    </Button>
                );
        }
    };

    const sendForm = (e) => {
        fetch("https://api.formik.com/submit/ds101-parts/parts-of-design-system", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                crossedOut: crossedOut,
                selected: selected,
                pickedUp: pickedUp,
            }),
        });
    };

    const drawPartItem = (category, categoryId, part, level) => {
        const partTitle = part.title || part;
        let disabledCheckbox = true;

        // allow pick up from selected parts
        if (stage === "pick-up" && selected.indexOf(categoryId) !== -1) {
            disabledCheckbox = false;
        }
        // do not allow over limit
        if (pickedUp.length === pickUpLimit) {
            disabledCheckbox = true;
        }
        // checked is always enabled
        if (pickedUp.indexOf(getInputName(category.title, partTitle)) !== -1) {
            disabledCheckbox = false;
        }
        return (
            <Label
                sx={{
                    my: 1,
                    pl: 3 * level,
                    color: disabledCheckbox ? "primary" : "text",
                }}
            >
                <Checkbox
                    name={getInputName(category.title, partTitle)}
                    disabled={disabledCheckbox}
                    onChange={pickUpPart}
                    sx={{
                        mr: 1,
                        width: "1rem",
                        height: "1.4rem",
                    }}
                />
                {partTitle}
            </Label>
        );
    }

    return (
        <>
            <Flex
                ref={ref}
                p={4}
                id="parts-form"
                sx={{
                    flexDirection: "column",
                }}
            >
                {instructions[stage]}
                <form onSubmit={handleSubmit}>
                    <Grid gap={4}>
                        <Grid columns={2} gap={4}>
                            <Box>
                                <Label htmlFor="name">Name: </Label>
                                <Input
                                    name="name"
                                    onChange={(e) => setName({ name: e.target.value })}
                                />
                            </Box>
                            <Box>
                                <Label htmlFor="email">Email: </Label>
                                <Input
                                    name="email"
                                    onChange={(e) => setEmail({ email: e.target.value })}
                                />
                            </Box>
                        </Grid>
                        {partsInBoxes.map((box) => (
                            <Grid gap={4} columns={box.length}>
                                {box.map((category) => {
                                    let boxStyle = {
                                        display:
                                            stage === "pick-up" ? "none" : "block",
                                        border: "thin",
                                        borderRadius: "medium",
                                        borderColor: "secondary",
                                        transition: "opacity 0.5s ease-in-out",
                                        cursor: "pointer",
                                        ":hover": {
                                            bg: "muted",
                                        },
                                    };
                                    let legendStyle = {};

                                    if (crossedOut.indexOf(category.id) !== -1) {
                                        boxStyle.opacity = 0.25;
                                    }

                                    if (selected.indexOf(category.id) !== -1) {
                                        boxStyle.display = "block";
                                        boxStyle.borderColor = "secondary";
                                        boxStyle.bg =
                                            stage === "pick-up" ? "background" : "muted";
                                    }

                                    return (
                                        <Box
                                            className="p-2"
                                            as="fieldset"
                                            sx={boxStyle}
                                            onClick={(e) => {
                                                boxAction(e, category.id);
                                            }}
                                        >
                                            <legend style={legendStyle}>{category.title}</legend>
                                            <Grid gap={0} columns={category.innerColumns || 1}>
                                                {category.parts.map((part) => {
                                                    return (
                                                        <Box>
                                                            {drawPartItem(
                                                                category,
                                                                category.id,
                                                                part,
                                                                0
                                                            )}
                                                            {part.parts &&
                                                                part.parts.map((subpart) =>
                                                                    drawPartItem(
                                                                        category,
                                                                        category.id,
                                                                        subpart,
                                                                        1
                                                                    )
                                                                )}
                                                        </Box>
                                                    );
                                                })}
                                            </Grid>
                                        </Box>
                                    );
                                })}
                            </Grid>
                        ))}

                        <Flex
                            sx={{
                                flexDirection: "column",
                                position: "sticky",
                                bottom: 0,
                                py: 4,
                                bg: "background",
                            }}
                        >
                            {actionButton()}
                        </Flex>
                    </Grid>
                </form>
            </Flex>
        </>
    );

}