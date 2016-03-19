import React from 'react'
import Avatar from 'components/Avatar'

export default () => {
  return (
    <div className="Home">
      <div>
        <h2>What is React Rally?</h2>
        <p>
          React Rally is a two day, single track conference for developers of all backgrounds using Facebook's ReactJS.
          Speakers will cover topics such as React Native, Flux, ES6, Isomorphic JavaScript, and so much more.
          Whether you're a seasoned developer, or a fledgling newbie.
          Whether you have been using React since it was first announced, or are just getting started.
          React Rally has something for everyone!
        </p>
        <button className="medium">More about React Rally &raquo;</button>
      </div>
      <div style={{textAlign: 'center'}}>
        <div className="section-legend">Keynote Speakers</div>
        <Avatar name="Matt Zabriskie" title="Sr. Developer, Facebook"/>
        <Avatar name="Matt Zabriskie" title="Sr. Developer, Facebook"/>
        <Avatar name="Matt Zabriskie" title="Sr. Developer, Facebook"/>
        <Avatar name="Matt Zabriskie" title="Sr. Developer, Facebook"/>
      </div>
    </div>
  )
}
