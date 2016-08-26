import React from 'react'
import constants from 'helpers/constants'
import Button from 'components/Button'

export default () => {
  return (
    <div className="Venue">
      <h1>React Rally 2016 will be held in the beautiful Rose Wagner Performing Arts Center within walking distance of great food and hotels.</h1>
      <div className="Venue__Wrapper">
        <div className="Venue__Content clearfix">
          <div className="Venue__Content__Thumbnail col col-4 float-right align-right">
            <a href={constants.Links.VENUE_DIRECTIONS} target="_blank">
              <img src="assets/dist/img/RoseWagnerMap.png"/>
            </a>
          </div>
          <div className="Venue__Content__Details col col-4 float-left">
            <h2>Rose Wagner Performing Arts Center</h2>
            <div className="Venue__Content__Address">138 West 300 South, Salt Lake City, UT 84101</div>
            <p>The Rose is a vibrant, active hub for emerging and established artists and arts organizations in Salt Lake City. This versatile venue houses three theaters as well as rehearsal and creation spaces for a host of performing arts companies.</p>
            <Button href={constants.Links.VENUE_DIRECTIONS} className="medium transparent">Get Directions &raquo;</Button>
          </div>
        </div>
      </div>
      <div className="Venue__Hotel">
        <h2>Little America</h2>
        <div className="Venue__Hotel__Address">500 South Main Street, Salt Lake City, UT 84101</div>
        <p>We have arranged a discount with Little America for attendees of the conference. This is a historic, upscale, four star hotel available for just $170 per night. This discounted rate is only available until July 24th and there are a limited number of rooms available, so book your room early.</p>
        <Button href={constants.Links.HOTEL_RESERVATION} className="medium">Book a Room &raquo;</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button href={constants.Links.HOTEL_DIRECTIONS} className="medium">Get Directions &raquo;</Button>
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
