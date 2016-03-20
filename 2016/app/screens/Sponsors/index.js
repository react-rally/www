import React from 'react'
import constants from 'helpers/constants'
import Button from 'components/Button'

export default () => {
  return (
    <div className="Sponsors">
      <h1>Thank you to our fine sponsors. Want to help support React Rally? We'd love to talk with you.</h1>
      <Button href={constants.Links.SPONSOR_PROSPECTUS} className="medium">Download Prospectus</Button>
    </div>
  )
}
