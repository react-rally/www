const DateUtils = {}

DateUtils.SECONDS = 1000
DateUtils.MINUTES = DateUtils.SECONDS * 60
DateUtils.HOURS = DateUtils.MINUTES * 60
DateUtils.DAYS = DateUtils.HOURS * 24

DateUtils.duration = (timeInMillis) => {
  let intervals = {
    'd': DateUtils.DAYS,
    'h': DateUtils.HOURS,
    'm': DateUtils.MINUTES,
    's': DateUtils.SECONDS,
  }
  let sb = ''

  Object.keys(intervals).forEach((k) => {
    let v = intervals[k]
    let unit = Math.floor(timeInMillis / v)
    timeInMillis %= v

    if (sb.length === 0 && unit === 0) return
    if (sb.length > 0) sb += ':'
    if (String(unit).length === 1) unit = '0' + unit
    sb += unit + k
  })
  return sb
}

export default DateUtils
