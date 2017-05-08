import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import constants from 'helpers/constants'
import shuffle from 'helpers/shuffle'
import About from 'components/About'
import Button from 'components/Button'
import Legend from 'components/Legend'
import Person from 'components/Person'
import SpeakerData from '../../../api/speakers'

export default () => {
  return (
    <div className="Home">
      <div className="Home__About">
        <h2>What is React Rally?</h2>
        <About/>
        <Link to="/about" className="Button medium">More about React Rally &raquo;</Link>
      </div>
    {Object.keys(SpeakerData).length > 0 ? (
      <div className="align-center">
        <Legend>Featured Speakers</Legend>
        {shuffle(Object.keys(SpeakerData)).map(key => {
          return SpeakerData[key].featured ? <Person {...SpeakerData[key]} key={key}/> : null
        })}
      </div>
    ) : null}
    </div>
  )
}
