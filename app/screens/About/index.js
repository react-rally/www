import React, { Component } from 'react';
import { Styles } from 'helpers/constants';

const STYLES = {
  section: {
    background: Styles.BG_COLOR_ABOUT,
    position: 'relative',
    paddingBottom: 125
  },
  h2: {
    color: Styles.FONT_COLOR_ABOUT
  },
  img: {
    position: 'absolute',
    right: 50,
    bottom: -183
  }
};

export default class About extends Component {
  render() {
    return (
      <section id="about" style={STYLES.section}>
        <img src="assets/img/tentacle.png" style={STYLES.img}/>
        <h2 style={STYLES.h2}>About</h2>
        <p>
          So, bye bye, love. I do for you. But her friend is nowhere to be grateful. They're quite aware what they're going through. All we need is music, sweet music. Here are we, one magical moment, such is the stuff. DJ, that was hazy cosmic jive. What this world is about. Control to Major Tom? Oh my T V C one five. Oh yeah, yeah, yeah. Just the beer light to guide us. He'd like to come and meet us. What's your name? I couldn't escape this feeling with my China girl. As I pushed my foot down to the floor. Now she walks through her sunken dream. Ee do ah buh. I'm not much cop at punching. 
        </p>
      </section>
    );
  }
}
