import React from 'react'
import cx from 'classnames'
import moment from 'moment'
import Avatar from 'components/Avatar'
import constants from 'helpers/constants'
import DateUtils, { MountainTime } from 'helpers/DateUtils'
import ScheduleData from '../../../api/schedule'
import SpeakerData from '../../../api/speakers'

const CONF_DAY_ONE_DATE = MountainTime.createDate(Date.parse(constants.Dates.CONF_DAY_ONE))
const CONF_DAY_TWO_DATE = MountainTime.createDate(Date.parse(constants.Dates.CONF_DAY_TWO))

function isNowWithinTimeRange(date, start, end) {
  let startTime = new Date(Date.parse(`${date.toDateString()} ${start}`)).getTime()
  let endTime = (end ?
                 new Date(Date.parse(`${date.toDateString()} ${end}`)) :
                 new Date(startTime + (3 * DateUtils.HOURS))
                ).getTime()

  return MountainTime.isNowBetweenTime(startTime, endTime)
}

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // Default showing day two schedule if day two is today
      selectedDay: MountainTime.isDateToday(CONF_DAY_TWO_DATE) ? 'dayTwo' : 'dayOne'
    }
  }

  componentDidMount() {
    this.timer = setInterval(this.forceUpdate.bind(this), 1 * DateUtils.MINUTES)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    this.timer = null
  }

  renderMenu() {
    return (
      <menu className="Schedule__Menu">
        <a
          href="javascript://"
          onClick={this.handleMenuItemClick.bind(this, 'dayOne')}
          className={cx(
            'Schedule__Menu__Item',
            {'Schedule__Menu__Item--active': this.state.selectedDay === 'dayOne'}
          )}>
            {moment(CONF_DAY_ONE_DATE).format('dddd, MMMM D')}
        </a>
        <a
          href="javascript://"
          onClick={this.handleMenuItemClick.bind(this, 'dayTwo')}
          className={cx(
            'Schedule__Menu__Item',
            {'Schedule__Menu__Item--active': this.state.selectedDay === 'dayTwo'}
          )}>
            {moment(CONF_DAY_TWO_DATE).format('dddd, MMMM D')}
        </a>
      </menu>
    )
  }

  render() {
    let selectedDay = this.state.selectedDay === 'dayOne' ? CONF_DAY_ONE_DATE : CONF_DAY_TWO_DATE
    let schedule = ScheduleData[this.state.selectedDay]

    return (
      <div className="Schedule">
        {schedule.length > 0 ? (
          <div>
            {this.renderMenu()}
            {schedule.map((session, i) => {
              let speaker = session.speaker ? SpeakerData[session.speaker] : null;
              let sessionEnd = schedule[i + 1] ? schedule[i + 1].time : null
              let isActive = MountainTime.isDateToday(selectedDay) && isNowWithinTimeRange(selectedDay, session.time, sessionEnd)
              return (
                <div
                  className={cx(
                    'Schedule__Session',
                    {
                      'Schedule__Session--active': isActive,
                      'Schedule__Session--speaker': speaker,
                      'Schedule__Session--description': session.description
                    }
                  )}
                  key={i}
                >
                  <time>{session.time}</time>
                  <div className="Schedule__Session__WhoWhat">
                    {speaker ? (
                      <Avatar
                        url={speaker.avatar}
                        size={55}
                      />
                    ) : session.title}
                  </div>
                  <div className="Schedule__Session__Description">
                    {speaker ? (
                      <div>
                        <em>{speaker.name}</em>
                        <h3>{session.title}</h3>
                        <p dangerouslySetInnerHTML={{__html: session.description.replace(/\n/g, '<br/>')}}/>
                      </div>
                    ) : (
                      <div>
                        <p>{session.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
            {this.renderMenu()}
          </div>
        ) : (
          <div>
            <h1>Schedule</h1>
            <p>We will post the schedule once all proposals have been submitted and reviewed. Stay tuned!</p>
          </div>
        )}
      </div>
    )
  }

  handleMenuItemClick(selectedDay) {
    this.setState({
      selectedDay
    }, () => {
      let el = document.querySelector('.Schedule')
      let rect = el.getBoundingClientRect()

      if (rect.top < 0 &&
          el && typeof el.scrollIntoView === 'function') {
        el.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        })
      }
    })
  }
}
