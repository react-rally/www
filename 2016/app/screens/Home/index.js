import React from 'react'
import { Link } from 'react-router'
import Avatar from 'components/Avatar'
import Button from 'components/Button'
import Legend from 'components/Legend'

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
        <Link to="/about" className="Button medium">More about React Rally &raquo;</Link>
      </div>
      <div className="align-center">
        <Legend>Keynote Speakers</Legend>
        <Avatar
          name="Ryan Florence"
          title="Co-founder, React Training"
          url="https://avatars0.githubusercontent.com/u/100200"
          twitter="https://twitter.com/ryanflorence"
          github="https://github.com/ryanflorence"
        />
        <Avatar
          name="Marcy Sutton"
          title="Sr. Front-End Engineer, Deque Systems"
          url="https://avatars0.githubusercontent.com/u/1045233"
          twitter="https://twitter.com/marcysutton"
          github="https://github.com/marcysutton"
        />
      </div>
    </div>
  )
}