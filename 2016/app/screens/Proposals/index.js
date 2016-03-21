import React from 'react'
import constants from 'helpers/constants'
import Button from 'components/Button'

export default () => {
  return (
    <div className="Proposals" style={{textAlign: 'center'}}>
      <h1>React Rally 2016 CFP is open until April 27th. If you're doing something interesting with React we'd love to hear about it!</h1>
      <p>This year we really want to hear about how the community is using React. Specifically we would love to hear about projects that are using React in unconventional or unexpected ways. Some ideas for what we would like to hear about are:</p>
      <ul style={{textAlign: 'left', margin: '0 auto', display: 'inline-block'}}>
        <li>WebGL</li>
        <li>Virtual Reality</li>
        <li>Video Games</li>
        <li>Robotics</li>
        <li>Embeded Devices</li>
        <li>Foreign Platforms</li>
        <li>etc.</li>
      </ul>
      <p>Of course if you have a more conventional talk you'd like to submit, we'd love to accept that too.</p>
      <p>If you would like to discuss your proposal, get some feedback, or brainstorm an idea, feel free to ask <a href="mailto:team@reactrally.com">team@reactrally.com</a>.</p>
      <p>&nbsp;</p>
      <Button href={constants.Links.PROPOSAL_FORM}>Submit Proposal &raquo;</Button>
    </div>
  )
}
