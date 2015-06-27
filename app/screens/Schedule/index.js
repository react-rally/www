import React, { Component } from 'react';
import StyleSheet from 'react-style';
import { Styles, Links } from 'helpers/constants';
import Session from './components/Session';

const poleColor = 'rgb(50, 96, 124)';
const STYLES = StyleSheet.create({
  section: {
    background: `url(assets/img/weatheredBackground.png) ${Styles.BG_COLOR_SCHEDULE}`,
    paddingBottom: 150
  },
  container: {
    position: 'relative',
    padding: '0 100px',
    minHeight: 1000
    // minHeight: 2500
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
  },
  pole: {
    width: 4,
    marginLeft: -2,
    backgroundColor: poleColor,
    position: 'absolute',
    top: -15,
    bottom: -15,
    left: '50%'
  },
  poleTopOuter: {
    width: 75,
    height: 75,
    borderRadius: 75,
    marginLeft: -37,
    border: '7px solid ' + poleColor,
    padding: 7,
    position: 'absolute',
    top: -75,
    left: '50%'
  },
  poleTopInner: {
    width: 47,
    height: 47,
    borderRadius: 47,
    backgroundColor: poleColor
  },
  poleBottomOuter: {
    width: 75,
    height: 75,
    borderRadius: 75,
    marginLeft: -37,
    border: '2px solid ' + poleColor,
    padding: 10,
    position: 'absolute',
    bottom: -75,
    left: '50%'
  },
  poleBottomInner: {
    width: 51,
    height: 51,
    borderRadius: 51,
    border: '6px solid ' + poleColor
  },
  orientLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: '50%'
  },
  orientRight: {
    position: 'absolute',
    top: 125,
    right: 0,
    bottom: 0,
    left: '50%'
  },
  dayHeader: {
    marginLeft: 100,
    marginBottom: 50,
    color: poleColor
  }
});

export default class Schedule extends Component {
  render() {
    return (
      <section id="schedule" style={STYLES.section}>
        <h2 style={STYLES.h2}>Schedule</h2>
        <img src="assets/img/cropCircle.png" style={STYLES.img}/>
        <div style={STYLES.container}>
          <div style={STYLES.pole}></div>
          <div style={STYLES.poleTopOuter}>
            <div style={STYLES.poleTopInner}></div>
          </div>
          <div style={STYLES.poleBottomOuter}>
            <div style={STYLES.poleBottomInner}></div>
          </div>
          <div style={STYLES.orientLeft}>
            <h3 style={STYLES.dayHeader}>Monday, August 24th, 2015</h3>
            <p>
              Our CFP has ended, and we are busy sorting through all your amazing proposals.
              We will be announcing the schedule once the speakers have been selected.
            </p>
            {/*
            <Session orient="left" topic="Ancient alien" description="extraterrestrial origin legendary times Machu Picchu"/>
            <Session orient="left" topic="Ancient alien" description="extraterrestrial origin legendary times Machu Picchu"/>
            <Session orient="left" topic="Ancient alien" description="extraterrestrial origin legendary times Machu Picchu"/>
            <Session orient="left" topic="Ancient alien" description="extraterrestrial origin legendary times Machu Picchu"/>
            <Session orient="left" topic="Ancient alien" description="extraterrestrial origin legendary times Machu Picchu"/>
            <Session orient="left" topic="Ancient alien" description="extraterrestrial origin legendary times Machu Picchu"/>
            <Session orient="left" topic="Ancient alien" description="extraterrestrial origin legendary times Machu Picchu"/>
            <Session orient="left" topic="Ancient alien" description="extraterrestrial origin legendary times Machu Picchu"/>
            <Session orient="left" topic="Ancient alien" description="extraterrestrial origin legendary times Machu Picchu"/>
            <Session orient="left" topic="Ancient alien" description="extraterrestrial origin legendary times Machu Picchu"/>
            */}
          </div>
          <div style={STYLES.orientRight}>
            <h3 style={STYLES.dayHeader}>Tuesday, August 25th, 2015</h3>
            {/*
            <Session orient="right" topic="Ancient alien" description="extraterrestrial origin legendary times Machu Picchu"/>
            <Session orient="right" topic="Ancient alien" description="extraterrestrial origin legendary times Machu Picchu"/>
            <Session orient="right" topic="Ancient alien" description="extraterrestrial origin legendary times Machu Picchu"/>
            <Session orient="right" topic="Ancient alien" description="extraterrestrial origin legendary times Machu Picchu"/>
            <Session orient="right" topic="Ancient alien" description="extraterrestrial origin legendary times Machu Picchu"/>
            <Session orient="right" topic="Ancient alien" description="extraterrestrial origin legendary times Machu Picchu"/>
            <Session orient="right" topic="Ancient alien" description="extraterrestrial origin legendary times Machu Picchu"/>
            <Session orient="right" topic="Ancient alien" description="extraterrestrial origin legendary times Machu Picchu"/>
            <Session orient="right" topic="Ancient alien" description="extraterrestrial origin legendary times Machu Picchu"/>
            <Session orient="right" topic="Ancient alien" description="extraterrestrial origin legendary times Machu Picchu"/>
            */}
          </div>
        </div>
      </section>
    );
  }
}
