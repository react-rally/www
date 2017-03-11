import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import constants from 'helpers/constants'
import { MountainTime } from 'helpers/DateUtils'
import About from 'components/About'
import Button from 'components/Button'
import Legend from 'components/Legend'
import Person from 'components/Person'
import SpeakerData from '../../../api/speakers'

const CFP_OPEN_DATE = MountainTime.createDate(Date.parse(constants.Dates.CFP_OPEN))
const CFP_CLOSE_DATE = MountainTime.createDate(Date.parse(constants.Dates.CFP_CLOSE))
const TICKETS_DATE = MountainTime.createDate(Date.parse(constants.Dates.TICKET_RELEASE))

export default () => {
  return (
    <div className="Home">
      <div className="Home__About">
        <h2>What is React Rally?</h2>
        <About/>
        <Link to="/about" className="Button medium">More about React Rally &raquo;</Link>
      </div>
      <div className="Home__Dates">
        <h2>Upcoming Dates</h2>
        <ul>
          <li><strong>{moment(CFP_OPEN_DATE).format('MMMM DD, YYYY')}</strong> CFP Open</li>
          <li><strong>{moment(TICKETS_DATE).format('MMMM DD, YYYY')}</strong> Early Bird Tickets</li>
          <li><strong>{moment(CFP_CLOSE_DATE).format('MMMM DD, YYYY')}</strong> CFP Closes</li>
        </ul>
      </div>
    {Object.keys(SpeakerData).length > 0 ? (
      <div className="align-center">
        <Legend>Keynote Speakers</Legend>
        {Object.keys(SpeakerData).map(key => {
          return SpeakerData[key].keynote ? <Person {...SpeakerData[key]} key={key}/> : null
        })}
      </div>
    ) : null}
    </div>
  )
}
