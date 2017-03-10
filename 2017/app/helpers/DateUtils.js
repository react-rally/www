class DateUtils {
  constructor(tzOffset = 0) {
    this.tzOffset = tzOffset
  }

  createDate(...args) {
    let date = new Date(...args)
    let tzOffset = date.getTimezoneOffset() * DateUtils.MINUTES
    return new Date((date.getTime() + tzOffset) - (this.tzOffset * DateUtils.MINUTES))
  }

  getTime() {
    return this.createDate().getTime()
  }
  
  isDateToday(date) {
    return this.createDate().toDateString() === date.toDateString()
  }
  
  isNowAfterTime(time) {
    return this.getTime() >= time
  }

  isNowBeforeTime(time) {
    return this.getTime() <= time
  }

  isNowBetweenTime(startTime, endTime) {
    return this.isNowAfterTime(startTime) && this.isNowBeforeTime(endTime)
  }
}

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

let DEFAULT_INSTANCE = null
DateUtils.getInstance = (tzOffset) => {
  let instance
  if (typeof tzOffset === 'number') {
    instance = new DateUtils(tzOffset)
  } else {
    if (!DEFAULT_INSTANCE) {
      DEFAULT_INSTANCE = new DateUtils()
    }
    instance = DEFAULT_INSTANCE
  }
  return instance
}

const MountainTime = DateUtils.getInstance(360)

export default DateUtils
export { MountainTime }
