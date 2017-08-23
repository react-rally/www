import React from 'react'
import constants from 'helpers/constants'
import Button from 'components/Button'

export default () => {
  return (
    <div className="Venue">
      <h1>React Rally 2017 will be held at the Sheraton Hotel located in the heart of downtown Salt Lake City.</h1>
      <div className="Venue__Wrapper">
        <div className="Venue__Content clearfix">
          <div className="Venue__Content__Thumbnail col col-4 float-right align-right">
            <a href={constants.Links.VENUE_DIRECTIONS} target="_blank">
              <img src="assets/dist/img/SheratonMap.png"/>
            </a>
          </div>
          <div className="Venue__Content__Details col col-4 float-left">
            <h2>Sheraton Salt Lake City Hotel</h2>
            <div className="Venue__Content__Address">150 West 500 South, Salt Lake City, UT, 84101</div>
            <p>Sheraton Salt Lake City Hotel is a world class hotel located in the heart of the downtown business and entertainment district.</p>
            <p>We have arranged a group discount with Sheraton Salt Lake City for attendees of React Rally. Rooms are available for $159 per night. This discounted rate is only available until July 23rd and there are a limited number of rooms available, so book your room early.</p>
            <Button href={constants.Links.HOTEL_RESERVATION} className="medium">Book a Room &raquo;</Button>&nbsp;&nbsp;&nbsp;&nbsp;
            <Button href={constants.Links.VENUE_DIRECTIONS} className="medium transparent">Get Directions &raquo;</Button>
          </div>
        </div>
      </div>
      <div className="Venue__Party">
        <h2>Gallivan Center</h2>
        <div className="Venue__Party__Address">239 South Main Street, Salt Lake City, UT 84101</div>
        <p>Join us after the conference on Friday for dinner, desert, lawn games, and live music.</p>
        <Button href={constants.Links.PARTY_DIRECTIONS} className="medium">Get Directions &raquo;</Button>
      </div>
    </div>
  )
}
