import React from 'react'
import constants from 'helpers/constants'
import Button from 'components/Button'
import Legend from 'components/Legend'
import SponsorData from '../../../api/sponsors'

export default () => {
  return (
    <div className="Sponsors">
      <h1>Thank you to our fine sponsors. Want to help support React Rally? We'd love to talk with you.</h1>
      <Button href={constants.Links.SPONSOR_PROSPECTUS} className="medium">Download Prospectus</Button>
      {Object.keys(SponsorData).filter(level => SponsorData[level].length > 0).map(level => {
        return (
          <div key={level}>
            <Legend>{level}</Legend>
            {SponsorData[level].map((sponsor, i) => {
              return sponsor.image ? (
                <a key={i} href={sponsor.url} target="_blank" title={sponsor.name}>
                  <img src={sponsor.image} style={sponsor.style} alt={sponsor.name}/>
                </a>
              ) : (
                <a key={i} href={sponsor.url} target="_blank">{sponsor.name}</a>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
