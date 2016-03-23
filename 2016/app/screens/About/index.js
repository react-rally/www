import React from 'react'
import About from 'components/About'
import Avatar from 'components/Avatar'
import Legend from 'components/Legend'

export default () => {
  return (
    <div className="About">
      <h2>About React Rally</h2>
      <About />
      <div className="align-center">
        <Legend>Organizers</Legend>
        <Avatar
          name="Matt Zabriskie"
          title="Co-organizer"
          url="https://avatars2.githubusercontent.com/u/199035"
          twitter="https://twitter.com/mzabriskie"
          github="https://github.com/mzabriskie"
        />
        <Avatar
          name="Jamison Dance"
          title="Co-organizer"
          url="https://avatars0.githubusercontent.com/u/72027"
          twitter="https://twitter.com/jergason"
          github="https://github.com/jergason"
        />
      </div>
    </div>
  )
}
