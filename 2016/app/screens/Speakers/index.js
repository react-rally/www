import React from 'react'
import Legend from 'components/Legend'
import Person from 'components/Person'
import SpeakerData from '../../../api/speakers'

export default () => {
  return (
    <div className="Speakers">
      <h1>Speakers</h1>
      <div className="align-center">
        {Object.keys(SpeakerData).map(key => <Person {...SpeakerData[key]} key={key}/>)}
      </div>
    </div>
  )
}
