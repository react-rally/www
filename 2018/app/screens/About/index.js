import React from 'react'
import About from 'components/About'
import Legend from 'components/Legend'
import Person from 'components/Person'
import shuffle from 'helpers/shuffle'

const OrganizerData = {
  "mzabriskie": {
    "name": "Matt Zabriskie",
    "title": "Co-organizer",
    "avatar": "https://avatars2.githubusercontent.com/u/199035",
    "twitter": "mzabriskie",
    "github": "mzabriskie"
  },
  "jergason": {
    "name": "Jamison Dance",
    "title": "Co-organizer",
    "avatar": "https://avatars0.githubusercontent.com/u/72027",
    "twitter": "jergason",
    "github": "jergason"
  },
  "sunny4days": {
    "name": "Sunny Legget",
    "title": "Event manager",
    "avatar": "https://pbs.twimg.com/profile_images/648946319013212160/z1_mkLp4_400x400.jpg",
    "twitter": "sunny4days"
  },
  "": {
    "name": "Shyloh Belnap",
    "title": "Event manager",
    "avatar": "https://pbs.twimg.com/profile_images/859536726292922368/HTVnE9tc_400x400.jpg",
    "twitter": "shylohb"
  }
}

export default () => {
  return (
    <div className="About">
      <h2>About React Rally</h2>
      <About />
      <br />
      <h2>Attendee Experience</h2>
      <p>
        As an attendee of React Rally you will enjoy two full days of talks where you will learn and keep your React knowledge current. You will also have built-in downtime throughout the day so you can discuss what you're learning with other developers, spend time catching up with old friends, or find opportunities to meet new friends. You will be provided with catered breakfast, and you will receive a gift card for lunch so that you can go out and explore Salt Lake City and enjoy some of the local fare. At the end of the day you can unwind and enjoy karaoke, dessert, board games, live music, or lawn games at the conference after parties held each evening.
      </p>
      <div className="align-center">
        <Legend>Organizers</Legend>
        {shuffle(Object.keys(OrganizerData)).map(key => {
          return <Person {...OrganizerData[key]} key={key}/>
        })}
      </div>
    </div>
  )
}
