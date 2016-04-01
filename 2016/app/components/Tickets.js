import React, { Component } from 'react'
import constants from 'helpers/constants'
import Button from 'components/Button'

const TICKET_RELEASE = Date.parse('2016-04-15T12:00:00-06:00');

function duration(timeInMillis) {
  let intervals = {
    'd': 86400000,
    'h': 3600000,
    'm': 60000,
    's': 1000,
  }
  let sb = ''

  Object.keys(intervals).forEach((k) => {
    let v = intervals[k]
    let unit = Math.floor(timeInMillis / v)
    timeInMillis %= v

    if (sb.length === 0 && unit === 0) return;
    if (sb.length > 0) sb += ':'
    if (String(unit).length === 1) unit = '0' + unit
    sb += unit + k
  })
  return sb
}

export default class Tickets extends Component {
  render() {
    let ticketsAvailable = Date.now() >= TICKET_RELEASE
    let diff

    if (!ticketsAvailable) {
      diff = TICKET_RELEASE - Date.now()
      setTimeout(this.forceUpdate.bind(this), 1000)
    }

    return (
      <div className="Tickets">
      {ticketsAvailable ? (
        <Button href={constants.Links.TICKET_SALES} className="large">Register Now</Button>
      ) : (
        <div className="Tickets__Countdown">
          <small>Tickets on sale soon</small>
          <h2 className="Tickets__Countdown__Timer">{duration(diff)}</h2>
        </div>
      )}
      </div>
    )
  }
}
