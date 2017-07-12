import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import constants from 'helpers/constants'
import shuffle from 'helpers/shuffle'
import About from 'components/About'
import Button from 'components/Button'
import Card from 'components/Card'
import Legend from 'components/Legend'
import Person from 'components/Person'
import SpeakerData from '../../../api/speakers'

const Tickets = [
  {
    name: 'Early Bird - Round One',
    price: 300,
    description: 'Early bird tickets for React Rally! 25% off because we love early bird ticket buyers.',
    soldOut: true
  },
  {
    name: 'Early Bird - Round Two',
    price: 350,
    description: 'One last chance to grab a React Rally ticket at a discounted price.',
    soldOut: true
  },
  {
    name: 'Standard',
    price: 400,
    description: 'The real deal. One ticket to React Rally.',
    soldOut: true
  },
  {
    name: 'Significant Other Activity Ticket',
    price: 20,
    description: 'Activities will be held both August 24 and August 25 in the evening after the conference. Purchase this ticket and bring your significant other along for the fun.'
  },
  {
    name: 'Charitable Donation',
    price: '-',
    description: 'All proceeds from this ticket will be donated to your choice of Black Girls Code, Humane Society of Utah, or EFF. This won\'t grant you entrance to the conference, but it will help you feel good.'
  }
]

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
      <div className="align-center">
        <Legend>Tickets</Legend>
      {Tickets.map((t) => {
        const price = (isNaN(t.price) ? '' : '$') + t.price

        return (
          <Card key={t.name} className="TicketCard">
            <h3>{t.name}</h3>
            <p>{t.description}</p>
            <h2>{price}</h2>
            <Button href="https://ti.to/trace-events/react-rally-2017/" disabled={t.soldOut}>
              {t.soldOut ? 'Sold Out' : 'Buy Now'}
            </Button>
          </Card>
        )
      })}
      </div>
    </div>
  )
}
