import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Header extends Component {
  render() {
    let isHomeScreen = this.context.router.isActive('/', true)
    return (
      <header className={"Header" + (isHomeScreen ? "" : " Header--padded")}>
      {isHomeScreen ? (
        <div>
          <div className="Home__Header">
            <h1>August 25-26 in Salt Lake City, UT</h1>
            <p>
              Facebook's ReactJS has taken client side development by storm.
              From single-page apps, to server rendering, to native mobile, to apps on your TV, ReactJS is everywhere.
              Come find out what makes it so incredible.
            </p>
            <div>
              <button className="large">Register Now</button>&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="large transparent">Submit Proposal</button>
            </div>
            <ul className="Home__Header__Nav navigation">
              <li><Link to="/speakers">Speakers</Link></li>
              <li><Link to="/schedule">Schedule</Link></li>
              <li><Link to="/venue">Venue</Link></li>
              <li><Link to="/sponsors">Sponsors</Link></li>
              <li><Link to="/conduct">Conduct</Link></li>
            </ul>
          </div>
          <div className="Home__Header__Newsletter">
            Subscribe to updates for React Rally&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" placeholder="Email address..."/>&nbsp;&nbsp;
            <button className="transparent">Sign Up</button>
          </div>
        </div>
      ) : (
        <div>
          <ul className="Header__Nav navigation">
            <li><Link activeClassName="active" to="/speakers">Speakers</Link></li>
            <li><Link activeClassName="active" to="/schedule">Schedule</Link></li>
            <li><Link activeClassName="active" to="/venue">Venue</Link></li>
            <li><Link activeClassName="active" to="/sponsors">Sponsors</Link></li>
            <li><Link activeClassName="active" to="/conduct">Conduct</Link></li>
            <li><Link activeClassName="active" to="/about">About</Link></li>
          </ul>
          <button className="medium">Tickets</button>
        </div>
      )}
      </header>
    )
  }
}

Header.contextTypes = {
  router: PropTypes.object
}
