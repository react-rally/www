import constants from 'helpers/constants'
import moment from 'moment';

const isNowBetween = (one, two) => moment.utc().isBetween(moment.utc(one), moment.utc(two));

function getLiveStreamURL() {
  let url

  if (moment.utc().isBefore(moment.utc(constants.Dates.CONF_DAY_ONE))) {
    url = constants.Links.LIVE_STREAM_PLACEHOLDER
  } else if (isNowBetween(constants.Dates.CONF_DAY_ONE, constants.Dates.CONF_DAY_TWO)) {
    url = constants.Links.LIVE_STREAM_DAY_ONE
  } else if (isNowBetween(constants.Dates.CONF_DAY_TWO, moment.utc(constants.Dates.CONF_DAY_TWO).add(1, 'd'))) {
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
