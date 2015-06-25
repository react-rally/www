import React, { Component } from 'react';
import StyleSheet from 'react-style';
import Home from './screens/Home';
import About from './screens/About';
import Speakers from './screens/Speakers';
import Schedule from './screens/Schedule';
import Tickets from './screens/Tickets';
import Venue from './screens/Venue';
import Sponsors from './screens/Sponsors';
import Conduct from './screens/Conduct';
import Organizers from './screens/Organizers';
import Divider from 'components/Divider';
import Navigation from 'components/Navigation';
import ga from 'helpers/googleAnalytics';
import browser from 'helpers/browser';

const STYLES = StyleSheet.create({
  container: {
    overflow: 'hidden',
    position: 'relative',
    margin: '0 auto',
    maxWidth: 1440
  },
  curtain: {
    marginBottom: browser.safari ? 0 : 333,
    boxShadow: '0 10px 25px #222'
  }
});

export default class App extends Component {
  render() {
    return (
      <div style={STYLES.container}>
      {/*
          Safari hates this being position fixed.
          It stays on top of other elements, but only sometimes.
          Super erratic behavior, rather just not deal with it.
          Safari still gets the content (below), just not as fancy.
      */}
      {!browser.safari && (
        <Organizers/>
      )}
        <div style={STYLES.curtain}>
          <Home/>
          <About/>
          <Speakers/>
          <Divider/>
          <Schedule/>
          <Tickets/>
          <Venue/>
          <Sponsors/>
          <Conduct/>
          {browser.safari && (
            <Organizers/>
          )}
          <Navigation/>
        </div>
      </div>
    );
  }
}
