import React, { Component } from 'react'
import moment from 'moment'

import constants from 'helpers/constants'
import Button from 'components/Button'
import Countdown from 'components/Countdown'

const TICKET_RELEASE_TIME = moment.utc(constants.Dates.TICKET_RELEASE)

export default class Tickets extends Component {
  render() {
    const ticketsAvailable = moment.utc().isSameOrAfter(TICKET_RELEASE_TIME)

    if (!ticketsAvailable) {
      setTimeout(this.forceUpdate.bind(this), 1000)
    }

    return (
      <div className="Tickets">
      {ticketsAvailable ? (
        <Button href={constants.Links.TICKET_SALES} className="large">Buy Tickets</Button>
      ) : (
        <Countdown date={TICKET_RELEASE_TIME} label="Tickets on sale soon" />
      )}
      </div>
    )
  }
}
