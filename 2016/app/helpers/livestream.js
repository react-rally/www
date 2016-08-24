import constants from 'helpers/constants'
import DateUtils, { MountainTime } from 'helpers/DateUtils'

function getLiveStreamURL() {
  return MountainTime.getTime() < Date.parse(constants.Dates.CONF_DAY_TWO) ?
          constants.Links.LIVE_STREAM_DAY_ONE :
          constants.Links.LIVE_STREAM_DAY_TWO
}

function getLiveStreamEmbedURL() {
  let url = getLiveStreamURL()

  if (url) {
    url = url.replace('youtu.be', 'youtube.com/embed')
  }

  return url
}

export { getLiveStreamURL, getLiveStreamEmbedURL }
