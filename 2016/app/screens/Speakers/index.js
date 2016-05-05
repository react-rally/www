import React from 'react'
import Legend from 'components/Legend'
import Avatar from 'components/Avatar'

export default () => {
  return (
    <div className="Speakers">
      <h1>Speakers</h1>
      <div className="align-center">
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
        <Avatar
          name="Sarah Drasner"
          title="Manager, UX Design & Engineering, Trulia"
          url="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/bio-pic.jpg"
          twitter="https://twitter.com/sarah_edo"
          github="https://github.com/sdras"
        />
        <Avatar
          name="Paul O’Shannessy"
          title="React Core Team, Facebook"
          url="https://avatars0.githubusercontent.com/u/8445?v=3&s=460"
          twitter="https://twitter.com/zpao"
          github="https://github.com/zpao"
        />
        <Avatar
          name="Joseph Savona"
          title="Relay & GraphQL Core Team, Facebook"
          url="https://avatars2.githubusercontent.com/u/6425824?v=3&s=460"
          twitter="https://twitter.com/en_JS"
          github="https://github.com/josephsavona"
        />
      </div>
      <p>More speakers coming soon!</p>
      <p>We are evaluating proposals now and will post the full speaker list soon.</p>
    </div>
  )
}
