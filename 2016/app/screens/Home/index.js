import React from 'react'
import { Link } from 'react-router'
import About from 'components/About'
import Avatar from 'components/Avatar'
import Button from 'components/Button'
import Legend from 'components/Legend'
import SpeakerData from '../../../api/speakers'

const KEYNOTE_SPEAKERS = [
  'ryanflorence',
  'marcysutton',
  'sarah_edo',
  'zpao',
  'en_JS',
];

export default () => {
  return (
    <div className="Home">
      <div>
        <h2>What is React Rally?</h2>
        <About />
        <Link to="/about" className="Button medium">More about React Rally &raquo;</Link>
      </div>
      <div className="align-center">
        <Legend>Keynote Speakers</Legend>
        {KEYNOTE_SPEAKERS.map(key => {
          let speaker = SpeakerData[key]
          return <Avatar {...speaker} url={speaker.avatar} key={key}/>
        })}
      </div>
    </div>
  )
}
