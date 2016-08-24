import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import { Link } from 'react-router'
import moment from 'moment'
import constants from 'helpers/constants'
import { MountainTime } from 'helpers/DateUtils'
import Button from 'components/Button'
import Tickets from 'components/Tickets'
import Newsletter from 'components/Newsletter'

const CONF_DAY_ONE_DATE = MountainTime.createDate(Date.parse(constants.Dates.CONF_DAY_ONE))
const CONF_DAY_TWO_DATE = MountainTime.createDate(Date.parse(constants.Dates.CONF_DAY_TWO))
const CONF_DATES_DISPLAY = moment(CONF_DAY_ONE_DATE).format('MMMM D') + '-' + moment(CONF_DAY_TWO_DATE).format('D')

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {isNavActive: false}
  }

  handleNavClick() {
    this.setState({isNavActive: !this.state.isNavActive})
  }

  render() {
    let isHomeScreen = this.context.router.isActive('/', true)
    let isCFPOpen = MountainTime.isNowBetweenTime(
                      Date.parse(constants.Dates.CFP_OPEN),
                      Date.parse(constants.Dates.CFP_CLOSE)
                    )

    return (
      <header className={"Header" + (isHomeScreen ? "" : " Header--padded")}>
      {isHomeScreen ? (
        <div className="Home__Header">
          <div className="Home__Header__Wrapper">
            <div className="Home__Header__Content">
              <h1>{CONF_DATES_DISPLAY} in Salt Lake City, UT</h1>
              <p>
                Facebook's React has taken client side development by storm.
                From single-page apps, to server rendering, to native mobile, to apps on your TV, React is everywhere.
                Come hear from the best and the brightest in the React community about what makes it so incredible.
              </p>
              <div className="Home__Header__Buttons">
                <Link to="/stream" className="Button large">Watch Live Stream</Link>
              {/*
                <Tickets/>&nbsp;&nbsp;&nbsp;&nbsp;
              {isCFPOpen && (
                <span>
                  <Button href={constants.Links.PROPOSAL_FORM} className="large transparent">Submit Proposal</Button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              )}
                <Button href={constants.Links.HOTEL_RESERVATION} className="large transparent">Book Hotel</Button>
              */}
              </div>
              <ul className="Home__Header__Nav navigation">
                <li><Link to="/speakers">Speakers</Link></li>
                <li><Link to="/schedule">Schedule</Link></li>
                <li><Link to="/venue">Venue</Link></li>
                <li><Link to="/sponsors">Sponsors</Link></li>
                <li><Link to="/conduct">Conduct</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </div>
            <img className="Home__Header__ReactLogo" src="assets/dist/img/ReactLogo.svg"/>
          </div>
          <div className="Home__Header__Newsletter">
            <Newsletter/>
          </div>
        </div>
      ) : (
        <div>
          <div className="Header__Logo col col-1">
            <Link to="/">
              <img src="assets/dist/img/ReactLogoGreen.svg" width="70"/>
            </Link>
          </div>
          <div className="Header__Nav__Wrapper col col-7 align-right">
            <ul
              className={cx(
                'navigation',
                'Header__Nav',
                {'Header__Nav--active': this.state.isNavActive}
              )}
              onClick={this.handleNavClick.bind(this)}
            >
              <li><Link activeClassName="active" to="/speakers">Speakers</Link></li>
              <li><Link activeClassName="active" to="/schedule">Schedule</Link></li>
              <li><Link activeClassName="active" to="/venue">Venue</Link></li>
              <li><Link activeClassName="active" to="/sponsors">Sponsors</Link></li>
              <li><Link activeClassName="active" to="/conduct">Conduct</Link></li>
              <li><Link activeClassName="active" to="/about">About</Link></li>
            </ul>
            <Button href={constants.Links.TICKET_SALES} className="medium">Tickets</Button>
          </div>
        </div>
      )}
      </header>
    )
  }
}

Header.contextTypes = {
  router: PropTypes.object
}
