import React from 'react'
import Legend from 'components/Legend'
import Person from 'components/Person'
import SpeakerData from '../../../api/speakers'

export default () => {
  return (
    <div className="Speakers">
      <h1>Speakers</h1>
      <div className="align-center">
        {Object.keys(SpeakerData).length > 0 ? (
          Object.keys(SpeakerData).map(key => <Person {...SpeakerData[key]} key={key}/>)
        ) : (
          <p>We haven't selected any speakers yet. Why not check out this <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank">cat video</a> while you wait?</p>
        )}
      </div>
    </div>
  )
}
