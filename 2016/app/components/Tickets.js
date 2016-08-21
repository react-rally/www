import React, { Component } from 'react'
import constants from 'helpers/constants'
import DateUtils, { MountainTime } from 'helpers/DateUtils'
import Button from 'components/Button'

const TICKET_RELEASE_TIME = Date.parse(constants.Dates.TICKET_RELEASE)

export default class Tickets extends Component {
  render() {
    let ticketsAvailable = MountainTime.isNowAfterTime(TICKET_RELEASE_TIME)
    let diff

    if (!ticketsAvailable) {
      diff = TICKET_RELEASE_TIME - MountainTime.getTime()
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
