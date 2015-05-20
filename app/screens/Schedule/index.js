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
          The schedule will be posted once the CFP ends.
          In the mean time you can <a href={Links.PROPOSAL_FORM} style={STYLES.a} target="_blank">submit a proposal</a>.
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
