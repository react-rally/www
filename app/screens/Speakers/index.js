import React, { Component } from 'react';
import StyleSheet from 'react-style';
import { Styles, Links } from 'helpers/constants';
import Avatar from './components/Avatar';
import SpeakerList from './helpers/speakers';

const STYLES = StyleSheet.create({
  section: {
    background: `url(assets/img/speakersBackground.png) ${Styles.BG_COLOR_SPEAKERS}`,
    paddingTop: 100
  },
  h2: {
    color: Styles.FONT_COLOR_SPEAKERS
  },
  content: {
    overflow: 'auto',
    padding: '0 50px',
    textAlign: 'center'
  },
  a: {
    color: '#FFF'
  }
});

export default class Speakers extends Component {
  renderSpeakers() {
    return SpeakerList.map((speaker, i) => {
      return <Avatar
          key={i}
          url={speaker.image}
          name={speaker.name}
          intro={speaker.intro}
          twitter={speaker.twitter}
          github={speaker.github}
        />
    });
  }

  render() {
    return (
      <section id="speakers" style={STYLES.section}>
        <h2 style={STYLES.h2}>Speakers</h2>
        <div style={STYLES.content}>
          {this.renderSpeakers()}
        </div>
      </section>
    );
  }
}
