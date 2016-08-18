import React from 'react'
import { Link } from 'react-router'
import constants from 'helpers/constants'
import Button from 'components/Button'
import Icon from 'components/Icon'
import Newsletter from 'components/Newsletter'

export default () => {
  return (
    <div className="Footer">
      <ul className="Footer__Nav navigation">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/speakers">Speakers</Link></li>
        <li><Link to="/schedule">Schedule</Link></li>
        <li><Link to="/venue">Venue</Link></li>
        <li><Link to="/sponsors">Sponsors</Link></li>
        <li><Link to="/conduct">Conduct</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <div className="Footer__Newsletter">
        <Newsletter/>
      </div>
      <section className="Footer__About">
        <div className="col col-4">
          <h4>About React Rally</h4>
          <p>
            Facebook's ReactJS has taken client side development by storm.
            From single-page apps, to server rendering, to native mobile, to apps on your TV, ReactJS is everywhere.
            Come find out what makes it so incredible.
          </p>
          <h4>Contact</h4>
          <p>
            Get in touch with us at <a href="mailto:team@reactrally.com">team@reactrally.com</a>.
          </p>
        </div>
        <div className="col col-2"></div>
        <div className="Footer__About__Tickets col col-2 align-right">
          <h3>Don't lose your spot.</h3>
          <Button href={constants.Links.TICKET_SALES} className="medium">Buy Tickets</Button>
        </div>
      </section>
      <div className="Footer__Social">
        <Icon href="https://twitter.com/ReactRally" type="twitter"/>
        <Icon href="https://github.com/react-rally" type="github"/>
      </div>
      <div className="Footer__Copyright">
        &copy; {new Date().getFullYear()} <a href="http://www.traceevents.io" target="_blank">Trace Events, LLC</a>
      </div>
    </div>
  )
}
