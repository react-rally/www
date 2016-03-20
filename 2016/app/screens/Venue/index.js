import React from 'react'

export default () => {
  return (
    <div className="Venue">
      <h1>React Rally 2016 will be held in the beautiful Rose Wagner Performing Arts Center within walking distance of great food and hotels.</h1>
      <div className="Venue__Wrapper">
        <div className="Venue__Content">
          <div className="col col-4">
            <h2>Rose Wagner Performing Arts Center</h2>
            <div className="Venue__Content__Address">138 West 300 South, Salt Lake City, UT 84101</div>
            <p>The Rose is a vibrant, active hub for emerging and established artists and arts organizations in Salt Lake City. This versatile venue houses three theaters as well as rehearsal and creation spaces for a host of performing arts companies.</p>
            <button className="medium transparent">Get Directions &raquo;</button>
          </div>
          <div className="col col-4 align-right">
            <img src="assets/img/RoseWagnerMap.png"/>
          </div>
        </div>
      </div>
      <div className="Venue__Hotel">
        <h2>Hotel Monaco</h2>
        <p>We have arranged a discount with Hotel Monaco for attendees of the conference. This is an amazing four star hotel, available for just $139 per night. There are a limited number of rooms available, so book your room early.</p>
        <button className="medium">Book a Room &raquo;</button>
      </div>
    </div>
  )
}
