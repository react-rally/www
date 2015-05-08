import React, { Component } from 'react';
import Home from './screens/Home';
import About from './screens/About';
import Speakers from './screens/Speakers';
import Schedule from './screens/Schedule';
import Tickets from './screens/Tickets';
import Venue from './screens/Venue';
import Sponsors from './screens/Sponsors';
import Conduct from './screens/Conduct';
import Divider from 'components/Divider';
import Navigation from 'components/Navigation';

const STYLES = {
  container: {
    overflow: 'hidden',
    position: 'relative',
    margin: '0 auto',
    maxWidth: 1440
  }
};

export default class App extends Component {
  render() {
    return (
      <div style={STYLES.container}>
        <Home/>
        <About/>
        <Speakers/>
        <Divider/>
        <Schedule/>
        <Tickets/>
        <Venue/>
        <Sponsors/>
        <Conduct/>
        <Navigation/>
      </div>
    );
  }
}
