import React, { Component } from 'react';
import StyleSheet from 'react-style';
import { Styles } from 'helpers/constants';

const STYLES = StyleSheet.create({
  section: {
    background: Styles.BG_COLOR_ABOUT,
    paddingBottom: 125
  },
  h2: {
    color: Styles.FONT_COLOR_ABOUT
  },
  img: {
    position: 'absolute',
    right: 50,
    bottom: -183,
    zIndex: 1
  },
  a: {
    color: Styles.FONT_COLOR_ABOUT
  }
});

export default class About extends Component {
  createLink(url, label) {
    return (
      <a href={url} target="_blank" style={STYLES.a}>{label}</a>
    );
  }

  render() {
    var reactLink = this.createLink('https://facebook.github.io/react', 'React');
    var reactNativeLink = this.createLink('https://facebook.github.io/react-native/', 'React Native');
    var fluxLink = this.createLink('https://facebook.github.io/flux/', 'Flux');
    var es6Link = this.createLink('http://es6-features.org/', 'ES6');
    var isoJSLink = this.createLink('https://reactjsnews.com/isomorphic-javascript-with-react-node/', 'Isomorphic JavaScript');

    return (
      <section id="about" style={STYLES.section}>
        <img src="assets/img/tentacle.png" style={STYLES.img}/>
        <h2 style={STYLES.h2}>About</h2>
        <p>
          React Rally is a two day, single track conference for developers of all backgrounds using Facebook's {reactLink}.
          Speakers will cover topics such as {reactNativeLink}, {fluxLink}, {es6Link}, {isoJSLink}, and so much more.
          Wether you're a seasoned developer, or a fledgling newbie.
          Whether you have been using React since it was first announced, or are just getting started.
          React Rally has something for everyone!
        </p>
      </section>
    );
  }
}
