import React from 'react'
import constants from 'helpers/constants'
import Button from 'components/Button'

export default () => {
  return (
    <div className="Proposals">
      <h1>The React Rally 2016 CFP is open until April 27th. If you're doing something interesting with React we'd love to hear about it!</h1>
      <div style={{textAlign: 'center'}}>
        <Button className="medium" href={constants.Links.PROPOSAL_FORM}>Submit Proposal &raquo;</Button>
      </div>
      <p>
        We want React Rally to showcase how the wider community is using React. We want stories about products or experiences that React made possible, stories about overcoming challenges with React, and ideas for solving problems that exist in React today. We are interested in hearing how you are pushing the limits of React, and how we can all use React to build better stuff. We want speakers of all experience levels and backgrounds, because React is for people of all experience levels and background.
      </p>

      <p>No idea what to talk about? Here are some ideas that could be interesting (but we are in no way limiting suggestions to this list of ideas).</p>
      <ul style={{textAlign: 'left', margin: '0 auto', display: 'inline-block'}}>
        <li>Observables and React</li>
        <li>Rendering to non-DOM targets (A React-to-Minecraft renderer? Why not?)</li>
        <li>Managing asynchronous Flux/Redux state</li>
        <li>What React can learn from other frameworks</li>
        <li>Pitfalls in building reusable React components</li>
        <li>The ideas of React throughout the history of computing</li>
        <li>React and art</li>
        <li>Server-rendered React using AWS Lambda</li>
        <li>Teaching React to beginners</li>
        <li>Learning React as a junior developer</li>
      </ul>
      <p>Of course if you have another talk you'd like to submit, we'd love to see that too.</p>
      <p>If you would like to discuss your proposal, get some feedback, or brainstorm an idea, feel free to ask <a href="mailto:team@reactrally.com">team@reactrally.com</a>.</p>
    </div>
  )
}
