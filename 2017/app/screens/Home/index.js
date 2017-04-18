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
          <li><del><strong>CFP Opens</strong> {moment(CFP_OPEN_DATE).format('[12:00am MDT], MMMM DD, YYYY')}</del></li>
          <li><del><strong>CFP Closes</strong> {moment(CFP_CLOSE_DATE).format('[11:59pm MDT], MMMM DD, YYYY')}</del></li>
          <li><del><strong>Early Bird Tickets - Round One</strong> {moment(TICKETS_DATE).format('[12:00pm MDT], MMMM DD, YYYY')} ($300)</del></li>
          <li><strong>Early Bird Tickets - Round Two</strong> {moment(TICKETS_DATE).add(7, 'days').format('[12:00pm MDT], MMMM DD, YYYY')} ($350)</li>
          <li><strong>Standard Tickets</strong> {moment(TICKETS_DATE).add(14, 'days').format('[12:00pm MDT], MMMM DD, YYYY')} ($400)</li>
        </ul>
      </div>
    {Object.keys(SpeakerData).length > 0 ? (
      <div className="align-center">
        <Legend>Featured Speakers</Legend>
        {Object.keys(SpeakerData).map(key => {
          return SpeakerData[key].featured ? <Person {...SpeakerData[key]} key={key}/> : null
        })}
      </div>
    ) : null}
    </div>
  )
}
