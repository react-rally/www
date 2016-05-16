import React from 'react'
import Legend from 'components/Legend'
import Avatar from 'components/Avatar'
import SpeakerData from '../../../api/speakers'

export default () => {
  return (
    <div className="Speakers">
      <h1>Speakers</h1>
      <div className="align-center">
        {Object.keys(SpeakerData).map(key => {
          let speaker = SpeakerData[key]
          return <Avatar {...speaker} url={speaker.avatar} key={key}/>
        })}
      </div>
    </div>
  )
}
