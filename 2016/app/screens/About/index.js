import React from 'react'
import Avatar from 'components/Avatar'
import Legend from 'components/Legend'

export default () => {
  return (
    <div className="About">
      <h1>About React Rally</h1>
      <p>React Rally is a two day, single track conference for developers of all backgrounds using Facebook's ReactJS. Speakers will cover topics such as React Native, Flux, ES6, Isomorphic JavaScript, and so much more. Whether you're a seasoned developer, or a fledgling newbie. Whether you have been using React since it was first announced, or are just getting started. React Rally has something for everyone!</p>
      <div className="align-center">
        <Legend>Organizers</Legend>
        <Avatar name="Matt Zabriskie" title="Co-organizer" url="https://avatars2.githubusercontent.com/u/199035"/>
        <Avatar name="Jamison Dance" title="Co-organizer" url="https://avatars0.githubusercontent.com/u/72027"/>
      </div>
    </div>
  )
}
