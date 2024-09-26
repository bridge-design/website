// getColors.js

const isStyleRule = (rule) => rule.type === 1

const isSameDomain = (styleSheet) => {
  if (!styleSheet.href) {
    return true
  }

  return styleSheet.href.indexOf(window.location.origin) === 0
}

const getCSSCustomPropIndex = () =>
  [...document.styleSheets].filter(isSameDomain).reduce(
    (finalArr, sheet) =>
      finalArr.concat(
        [...sheet.cssRules].filter(isStyleRule).reduce((propValArr, rule) => {
          const props = [...rule.style]
            .map((propName) => [propName.trim(), rule.style.getPropertyValue(propName).trim()])
            .filter(([propName]) => propName.indexOf('--btg') === 0)

          return [...propValArr, ...props]
        }, [])
      ),
    []
  )

export const getColors = () => {
  const colorsArray = getCSSCustomPropIndex()
  const colorVariables = {}
  colorsArray.forEach(([varName, colorValue]) => {
    // Remove the prefix '--btg-color-' to get the remaining part (e.g., 'brand-dark', 'brand-green')
    const strippedName = varName.replace('--btg-color-', '')

    // Split by '-' to separate the type (e.g., 'brand') and the shade (e.g., 'dark', 'green')
    const [colorType, colorShade] = strippedName.split('-')

    // Initialize the color type if it doesn't exist
    if (!colorVariables[colorType]) {
      colorVariables[colorType] = {}
    }

    // Assign the color value to the appropriate color type and shade
    colorVariables[colorType][colorShade] = colorValue
  })
  return colorVariables
}
