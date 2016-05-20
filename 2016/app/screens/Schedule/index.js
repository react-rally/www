import React from 'react'
import cx from 'classnames'
import Avatar from 'components/Avatar'
import ScheduleData from '../../../api/schedule'
import SpeakerData from '../../../api/speakers'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedDay: 'dayOne'
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
            Thursday, August 25
        </a>
        <a
          href="javascript://"
          onClick={this.handleMenuItemClick.bind(this, 'dayTwo')}
          className={cx(
            'Schedule__Menu__Item',
            {'Schedule__Menu__Item--active': this.state.selectedDay === 'dayTwo'}
          )}>
            Friday, August 26
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
