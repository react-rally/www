import React, { Component } from 'react';
import StyleSheet from 'react-style';
import Radium from 'radium'
import { Styles, Sizes, Links } from 'helpers/constants';
import ButtonLink from 'components/ButtonLink';

const STYLES = StyleSheet.create({
  section: {
    background: 'url(assets/dist/img/SLCBackground.png)',
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
    margin: '25px 0 0 33%'
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
        <img src="assets/dist/img/robot_withLaser.png" style={STYLES.img}/>
        <div style={STYLES.container}>
          <h2 style={STYLES.h2}>Tickets</h2>
          <p style={STYLES.p}>
            The Golden Ticket. Super Bowl tickets. Backstage passes to T Swizzle. React Rally tickets. High demand, limited supply.
          </p>
          <p style={STYLES.p}>
            Tickets are now on sale. There are limited tickets available, so don't procrastinate, and miss out!
          </p>
          <p style={STYLES.p}>
            <ButtonLink href={Links.TICKET_SALES} style={STYLES.a}>Buy Tickets</ButtonLink>
          </p>
        </div>
      </section>
    );
  }
}

var Tickets = Radium.Enhancer(TicketsComponent)
export default Tickets
