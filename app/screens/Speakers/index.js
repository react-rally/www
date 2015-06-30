import React, { Component } from 'react';
import StyleSheet from 'react-style';
import { Styles, Links } from 'helpers/constants';
import SpeakerData from 'helpers/speakers';
import Avatar from './components/Avatar';

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
    textAlign: 'center'
  },
  a: {
    color: '#FFF'
  }
});

export default class Speakers extends Component {
  renderSpeakers() {
    return Object.keys(SpeakerData).map((key, i) => {
      var speaker = SpeakerData[key];
      return <Avatar
          key={key}
          speaker={speaker}
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
