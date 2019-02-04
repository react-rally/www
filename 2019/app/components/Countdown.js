import React, { Component } from 'react'
import moment from 'moment'

import DateUtils from 'helpers/DateUtils'

export default class Tickets extends Component {
  componentDidMount () {
    this.timer = setInterval(this.forceUpdate.bind(this), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render() {
    const diff = moment.utc(this.props.date).diff(moment.utc())

    return (
      <div className="Countdown">
        <small>{this.props.label}</small>
        <h2 className="Countdown__Timer">{DateUtils.duration(diff)}</h2>
      </div>
    )
  }
}

