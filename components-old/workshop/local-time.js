const stdTimezoneOffset = function () {
  var jan = new Date(this.getFullYear(), 0, 1)
  var jul = new Date(this.getFullYear(), 6, 1)
  return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset())
}

const isDstObserved = () => new Date().getTimezoneOffset() < stdTimezoneOffset()

function getTimezoneAbbr(tzOffset) {
  switch (tzOffset) {
    case -7:
      return 'MST' // MST (UTC−07:00)
    case -6:
      return 'CST' // CST (UTC−06:00)
    case -5:
      return 'EST' // EST (UTC−05:00)
    case -8:
    default:
      return 'PST' // PST (UTC−08:00)
  }
}

export default function localTime(start, end, format = '%start%-%end% %timezone%') {
  let tzOffset = -new Date().getTimezoneOffset() / 60
  tzOffset = isDstObserved ? tzOffset - 1 : tzOffset

  if (tzOffset >= -8 && tzOffset <= -4) {
    start = start + 8 + tzOffset
    end = end + 8 + tzOffset
  }

  const zoneAbbr = getTimezoneAbbr(tzOffset)
  return format.replace('%start%', start).replace('%end%', end).replace('%timezone%', zoneAbbr)
}
