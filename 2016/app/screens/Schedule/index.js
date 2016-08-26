import React from 'react'
import cx from 'classnames'
import moment from 'moment'
import Avatar from 'components/Avatar'
import ScheduleData from '../../../api/schedule'
import SpeakerData from '../../../api/speakers'

const DAY_ONE = new Date(2016, 7, 25)
const DAY_TWO = new Date(2016, 7, 26)
const SECONDS = 1000
const MINUTES = SECONDS * 60
const HOURS = MINUTES * 60
const MT_OFFSET = 360 * MINUTES

// Get a Date adjusted to Mountain Time
function getToday() {
  let tzOffset = new Date().getTimezoneOffset() * MINUTES
  return new Date((Date.now() + tzOffset) - MT_OFFSET)
}

function isToday(date) {
  return getToday().toDateString() === date.toDateString()
}

function isWithinRange(date, start, end) {
  let currentTime = getToday().getTime()
  let startTime = new Date(Date.parse(`${date.toDateString()} ${start}`)).getTime()
  let endTime = (end ?
                 new Date(Date.parse(`${date.toDateString()} ${end}`)) :
                 new Date(startTime + (3 * HOURS))
                ).getTime()

  return currentTime > startTime && currentTime < endTime
}

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // Default showing day two schedule if day two is today
      selectedDay: isToday(DAY_TWO) ? 'dayTwo' : 'dayOne'
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.forceUpdate()
    }, 1 * MINUTES)
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
            {moment(DAY_ONE).format('dddd, MMMM D')}
        </a>
        <a
          href="javascript://"
          onClick={this.handleMenuItemClick.bind(this, 'dayTwo')}
          className={cx(
            'Schedule__Menu__Item',
            {'Schedule__Menu__Item--active': this.state.selectedDay === 'dayTwo'}
          )}>
            {moment(DAY_TWO).format('dddd, MMMM D')}
        </a>
      </menu>
    )
  }

  render() {
    let selectedDay = this.state.selectedDay === 'dayOne' ? DAY_ONE : DAY_TWO
    let schedule = ScheduleData[this.state.selectedDay]

    return (
      <div className="Schedule">
        {this.renderMenu()}
        {schedule.map((session, i) => {
          let speaker = session.speaker ? SpeakerData[session.speaker] : null;
          let sessionEnd = schedule[i + 1] ? schedule[i + 1].time : null
          let isActive = isToday(selectedDay) && isWithinRange(selectedDay, session.time, sessionEnd)
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
                ) : null
                }
              </div>
            </div>
          )
        })}
        {this.renderMenu()}
      </div>
    )
  }

  handleMenuItemClick(selectedDay) {
    this.setState({
      selectedDay
    })
  }
}
