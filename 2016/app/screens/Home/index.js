import React from 'react'
import { Link } from 'react-router'
import About from 'components/About'
import Button from 'components/Button'
import Legend from 'components/Legend'
import Person from 'components/Person'
import SpeakerData from '../../../api/speakers'

export default () => {
  return (
    <div className="Home">
      <div>
        <h2>What is React Rally?</h2>
        <About/>
        <Link to="/about" className="Button medium">More about React Rally &raquo;</Link>
      </div>
      <div className="align-center">
        <Legend>Keynote Speakers</Legend>
        {Object.keys(SpeakerData).map(key => {
          return SpeakerData[key].keynote ? <Person {...SpeakerData[key]} key={key}/> : null
        })}
      </div>
    </div>
  )
}
