import React, { Component } from 'react';
import StyleSheet from 'react-style';
import { Styles, Links } from 'helpers/constants';
import Avatar from './components/Avatar';
import Speaker from './helpers/Speaker';

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
    padding: '0 50px'
  },
  a: {
    color: '#FFF'
  }
});

const SPEAKERS = [
  new Speaker(
    'Christopher Chedeau',
    'Frenchy Front-end Engineer at Facebook.',
    'assets/img/speakers/vjeux.jpg'
  ),
  new Speaker(
    'Brian Holt',
    'Senior UI Engineer at Netflix.',
    'assets/img/speakers/holtbt.jpg'
  ),
  new Speaker(
    'You?',
    <a href={Links.PROPOSAL_FORM} target="_blank" style={STYLES.a}>Submit a Proposal!</a>,
    'assets/img/speakers/anonymous.png'
  )
];

export default class Speakers extends Component {
  renderSpeakers() {
    return SPEAKERS.map((speaker, i) => {
      return <Avatar
          key={i}
          url={speaker.image}
          name={speaker.name}
          intro={speaker.intro}
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
