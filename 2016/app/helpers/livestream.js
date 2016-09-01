import constants from 'helpers/constants'
import DateUtils, { MountainTime } from 'helpers/DateUtils'

function getLiveStreamURL() {
  let url

  if (MountainTime.isNowBeforeTime(Date.parse(constants.Dates.CONF_DAY_ONE))) {
    url = constants.Links.LIVE_STREAM_PLACEHOLDER
  } else if (MountainTime.isNowBetweenTime(
              Date.parse(constants.Dates.CONF_DAY_ONE),
              Date.parse(constants.Dates.CONF_DAY_TWO))) {
    url = constants.Links.LIVE_STREAM_DAY_ONE
  } else if (MountainTime.isNowBetweenTime(
              Date.parse(constants.Dates.CONF_DAY_TWO),
              Date.parse(constants.Dates.CONF_DAY_TWO) + (DateUtils.DAYS * 1))) {
    url = constants.Links.LIVE_STREAM_DAY_TWO
  } else {
    url = constants.Links.LIVE_STREAM_OVER
  }

  return url
}

function getLiveStreamEmbedURL() {
  let url = getLiveStreamURL()

  if (url) {
    url = url.replace('youtu.be', 'youtube.com/embed')
  }

  return url
}

export { getLiveStreamURL, getLiveStreamEmbedURL }
