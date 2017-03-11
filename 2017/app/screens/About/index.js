import React from 'react'
import About from 'components/About'
import Legend from 'components/Legend'
import Person from 'components/Person'

export default () => {
  return (
    <div className="About">
      <h2>About React Rally</h2>
      <About />
      <div className="align-center">
        <Legend>Organizers</Legend>
        <Person
          name="Matt Zabriskie"
          title="Co-organizer"
          avatar="https://avatars2.githubusercontent.com/u/199035"
          twitter="mzabriskie"
          github="mzabriskie"
        />
        <Person
          name="Jamison Dance"
          title="Co-organizer"
          avatar="https://avatars0.githubusercontent.com/u/72027"
          twitter="jergason"
          github="jergason"
        />
        <Person
          name="Sunny Leggett"
          title="Event manager"
          avatar="https://media.licdn.com/media/p/5/005/093/384/2722c94.jpg"
          twitter="sunny4days"
        />
      </div>
    </div>
  )
}
