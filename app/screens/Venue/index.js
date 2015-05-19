import React, { Component } from 'react';
import StyleSheet from 'react-style';
import { Styles } from 'helpers/constants';

const STYLES = StyleSheet.create({
  section: {
    background: Styles.BG_COLOR_VENUE,
    color: '#fff',
    overflow: 'hidden'
  },
  container: {
    minHeight: 400,
    position: 'relative'
  },
  h2: {
    color: Styles.FONT_COLOR_VENUE
  },
  p: {
    marginLeft: 400,
    marginTop: 150
  },
  imgReactVenue: {
    position: 'absolute',
    top: -185,
    left: -250
  },
  imgVenue: {
    position: 'absolute',
    borderRadius: 150,
    width: 300,
    height: 300,
    top: 97,
    left: 33
  }
});

export default class Venue extends Component {
  render() {
    return (
      <section id="venue" style={STYLES.section}>
        <div style={STYLES.container}>
          <h2 style={STYLES.h2}>Venue</h2>
          <p style={STYLES.p}>
            Just as long as you are too cool to fool? Cover you. So come on every guy, grab a girl. Because my love for you. I said that time may change me. Slap that slap that baby make him free! Duke, making sure white stains. Have you sought fortune, evasive and shy? Yeah, bye bye, love. The european cannon is here. Under pressure. I'm floating in a moonage daydream, oh yeah. I wrote it ten times or more. You shouldn't mess with me. Been putting out fire. Sat on a pleasant cruise. Ziggy sucked up into his mind, ah. Pray tomorrow. See them as they really are. From Ibiza to the Norfolk Broads.
          </p>
          <img src="assets/img/reactVenue.png" style={STYLES.imgReactVenue}/>
          <img src="assets/img/venue.jpg" style={STYLES.imgVenue}/>
        </div>
      </section>
    );
  }
}
