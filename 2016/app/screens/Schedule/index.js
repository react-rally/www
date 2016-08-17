import React from 'react'
import cx from 'classnames'
import moment from 'moment'
import Avatar from 'components/Avatar'
import ScheduleData from '../../../api/schedule'
import SpeakerData from '../../../api/speakers'

const DAY_ONE = new Date(2016, 7, 25)
const DAY_TWO = new Date(2016, 7, 26)

function isToday(date) {
  return new Date().toISOString().split('T')[0] === date.toISOString().split('T')[0]
}

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // Default showing day two schedule if day two is today
      selectedDay: isToday(DAY_TWO) ? 'dayTwo' : 'dayOne'
    }
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
    return (
      <div className="Schedule">
        {this.renderMenu()}
        {ScheduleData[this.state.selectedDay].map((session, i) => {
          let speaker = session.speaker ? SpeakerData[session.speaker] : null;
          return (
            <div
              className={cx(
                'Schedule__Session',
                {
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
