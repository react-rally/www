import constants from 'helpers/constants'
import DateUtils, { MountainTime } from 'helpers/DateUtils'

function getLiveStreamURL() {
  let isDayOne = MountainTime.isNowBetweenTime(
                  Date.parse(constants.Dates.CONF_DAY_ONE),
                  Date.parse(constants.Dates.CONF_DAY_ONE) + DateUtils.DAYS - 1
                 )
  let isDayTwo = MountainTime.isNowBetweenTime(
                  Date.parse(constants.Dates.CONF_DAY_TWO),
                  Date.parse(constants.Dates.CONF_DAY_TWO) + DateUtils.DAYS - 1
                 )

  let url = null

  if (isDayOne) {
    url = constants.Links.LIVE_STREAM_DAY_ONE
  } else if (isDayTwo) {
    url = constants.Links.LIVE_STREAM_DAY_TWO
  }

  return url || constants.Links.LIVE_STREAM_PLACEHOLDER
}

function getLiveStreamEmbedURL() {
  let url = getLiveStreamURL()

  if (url) {
    url = url.replace('youtu.be', 'youtube.com/embed')
  }

  return url
}

export { getLiveStreamURL, getLiveStreamEmbedURL }
