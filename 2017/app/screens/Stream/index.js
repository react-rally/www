import React from 'react'
import constants from 'helpers/constants'
import { getLiveStreamEmbedURL } from 'helpers/livestream'

export default () => {
  let url = getLiveStreamEmbedURL()

  return (
    <div className="Stream">
      <h1>Live Stream</h1>
      <iframe
        className="Stream__Embedded"
        width="560"
        height="315"
        src={url}
        frameBorder="0"
        alowfulscreen
      ></iframe>
    </div>
  )
}
