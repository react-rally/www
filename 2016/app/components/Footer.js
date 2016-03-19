import React from 'react'
import { Link } from 'react-router'

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
        Subscribe to updates on React Rally&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" placeholder="Email address..."/>&nbsp;&nbsp;
        <button>Sign Up</button>
      </div>
      <section className="Footer__About">
        <div className="col cols-4">
          <h5>About React Rally</h5>
          <p>
            Facebook's ReactJS has taken client side development by storm.
            From single-page apps, to server rendering, to native mobile, to apps on your TV, ReactJS is everywhere.
            Come find out what makes it so incredible.
          </p>
          <h5>Contact</h5>
          <p>
            Get in touch with us at <a href="mailto:team@reactrally.com">team@reactrally.com</a>.
          </p>
        </div>
        <div className="col cols-2"></div>
        <div className="col cols-2">
          <h3>Don't lose your spot.</h3>
          <button className="medium">Register Now</button>
        </div>
      </section>
      <div className="Footer__Social">
        Twitter
        GitHub
      </div>
      <div className="Footer__Copyright">
        &copy; 2016 Trace Events, LLC
      </div>
    </div>
  )
}
