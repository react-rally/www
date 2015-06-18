import React, { Component } from 'react';
import StyleSheet from 'react-style';
import Radium from 'radium'
import { Styles, Sizes, Links } from 'helpers/constants';

const STYLES = StyleSheet.create({
  section: {
    background: 'url(assets/img/SLCBackground.png)',
    position: 'relative',
    minHeight: 390,
    color: '#fff'
  },
  container: {
    position: 'relative'
  },
  h2: {
    color: Styles.FONT_COLOR_TICKETS
  },
  p: {
    marginRight: 500
  },
  a: {
    background: 'transparent',
    border: '1px solid #fff',
    borderRadius: 5,
    color: '#fff',
    display: 'inline-block',
    fontSize: 20,
    padding: '10px 35px',
    margin: '25px 0 0 33%',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    ':hover': {
      backgroundColor: '#fff',
      color: '#000'
    }
  },
  img: {
    position: 'absolute',
    top: -150,
    right: 50
  }
});

class TicketsComponent extends Component {
  render() {
    return (
      <section id="tickets" style={STYLES.section}>
        <img src="assets/img/robot_withLaser.png" style={STYLES.img}/>
        <div style={STYLES.container}>
          <h2 style={STYLES.h2}>Tickets</h2>
          <p style={STYLES.p}>
            The Golden Ticket. Super Bowl tickets. Backstage passes to T Swizzle. React Rally tickets. High demand, limited supply.
          </p>
          <p style={STYLES.p}>
            Early Bird tickets are all sold out. Standard tickets will go on sale on Wednesday, July 1st at 12:00pm MDT for $400.
          </p>
          <p style={STYLES.p}>
            <a href={Links.TICKET_SALES} target="_blank" style={STYLES.a}>Buy Tickets</a>
          </p>
        </div>
      </section>
    );
  }
}

var Tickets = Radium.Enhancer(TicketsComponent)
export default Tickets
