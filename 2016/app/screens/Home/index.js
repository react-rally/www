import React from 'react'
import { Link } from 'react-router'
import About from 'components/About'
import Button from 'components/Button'
import Legend from 'components/Legend'
import Person from 'components/Person'
import constants from 'helpers/constants'
import { MountainTime } from 'helpers/DateUtils'
import SpeakerData from '../../../api/speakers'

export default () => {
  let isEventLive = MountainTime.isNowBetweenTime(
                      Date.parse(constants.Dates.CONF_DAY_ONE),
                      Date.parse(constants.Dates.CONF_DAY_TWO)
                    )

  return (
    <div className="Home">
      {isEventLive ? (
        <div className="align-center">
          <h2>Live Stream</h2><br/>
          <iframe
            className="Home__LiveStream"
            width="560"
            height="315"
            src={constants.Links.LIVE_STREAM}
            frameborder="0"
            allowfullscreen
            style={{border: 0}}
          ></iframe>
        </div>
      ) : (
        <div>
          <h2>What is React Rally?</h2>
          <About />
          <Link to="/about" className="Button medium">More about React Rally &raquo;</Link>
        </div>
      )}
      <div className="align-center">
        <Legend>Keynote Speakers</Legend>
        {Object.keys(SpeakerData).map(key => {
          return SpeakerData[key].keynote ? <Person {...SpeakerData[key]} key={key}/> : null
        })}
      </div>
    </div>
  )
}
