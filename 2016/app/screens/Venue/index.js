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
        <h2>Hotel Monaco</h2>
        <p>We have arranged a discount with Hotel Monaco for attendees of the conference. This is an amazing four star hotel, available for just $139 per night. There are a limited number of rooms available, so book your room early.</p>
        <Button href={constants.Links.HOTEL_RESERVATION} className="medium">Book a Room &raquo;</Button>
      </div>
    </div>
  )
}
