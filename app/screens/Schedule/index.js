import React, { Component } from 'react';
import StyleSheet from 'react-style';
import { Styles, Links } from 'helpers/constants';
import Session from './components/Session';

const STYLES = StyleSheet.create({
  section: {
    background: `url(assets/img/weatheredBackground.png) ${Styles.BG_COLOR_SCHEDULE}`,
    minHeight: 350
    // minHeight: 1000
  },
  container: {
    position: 'relative'
  },
  h2: {
    color: Styles.FONT_COLOR_SCHEDULE
  },
  img: {
    position: 'absolute',
    left: -100
  },
  a: {
    color: Styles.FONT_COLOR_SCHEDULE
  }
});

export default class Schedule extends Component {
  render() {
    return (
      <section id="schedule" style={STYLES.section}>
        <h2 style={STYLES.h2}>Schedule</h2>
        <p>
          Our CFP has ended, and we are busy sorting through all your amazing proposals.
          We will be announcing the schedule once the speakers have been selected.
        </p>
        {/*
        <img src="assets/img/cropCircle.png" style={STYLES.img}/>
        <div style={STYLES.container}>
          <Session topic="Ancient alien" description="extraterrestrial origin legendary times Machu Picchu"/>
        </div>
        */}
      </section>
    );
  }
}
