import React, { Component } from 'react'
import constants from 'helpers/constants'
import DateUtils from 'helpers/DateUtils'
import Button from 'components/Button'
import moment from 'moment'

const TICKET_RELEASE_TIME = moment.utc(constants.Dates.TICKET_RELEASE)

export default class Tickets extends Component {
  render() {
    let ticketsAvailable = moment.utc().isSameOrAfter(TICKET_RELEASE_TIME)
    let diff

    if (!ticketsAvailable) {
      diff = TICKET_RELEASE_TIME.diff(moment.utc())
      setTimeout(this.forceUpdate.bind(this), 1000)
    }

    return (
      <div className="Tickets">
      {ticketsAvailable ? (
        <Button href={constants.Links.TICKET_SALES} className="large">Buy Tickets</Button>
      ) : (
        <div className="Tickets__Countdown">
          <small>Tickets on sale soon</small>
          <h2 className="Tickets__Countdown__Timer">{DateUtils.duration(diff)}</h2>
        </div>
      )}
      </div>
    )
  }
}
