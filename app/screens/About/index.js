import React, { Component } from 'react';
import StyleSheet from 'react-style';
import { Styles } from 'helpers/constants';

const STYLES = StyleSheet.create({
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
  },
  a: {
    color: Styles.FONT_COLOR_ABOUT
  }
});

export default class About extends Component {
  render() {
    return (
      <section id="about" style={STYLES.section}>
        <img src="assets/img/tentacle.png" style={STYLES.img}/>
        <h2 style={STYLES.h2}>About</h2>
        <p>
        React Rally is a two day single track conference for web, mobile and backend developers using Facebook's <a href="http://facebook.github.io/react" target="_blank" style={STYLES.a}>React</a>. Do you use React? Do you want to? This conference is for you.
        </p>
      </section>
    );
  }
}
