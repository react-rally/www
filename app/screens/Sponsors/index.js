import React, { Component } from 'react';
import StyleSheet from 'react-style';
import { Styles, Links } from 'helpers/constants';
import ButtonLink from 'components/ButtonLink';

const STYLES = StyleSheet.create({
  section: {
    background: `url(assets/img/weatheredBackground.png) ${Styles.BG_COLOR_SPONSORS}`,
    minHeight: 350
  },
  h2: {
    color: Styles.FONT_COLOR_SPONSORS
  },
  h3: {
    textAlign: 'center',
    fontStyle: 'italic'
  },
  content: {
    textAlign: 'center'
  },
  img: {
    display: 'inline-block',
    margin: 25
  },
  p: {
    textAlign: 'center'
  },
  buttonLink: {
    color: '#000',
    borderColor: '#000',
    ':hover': {
      backgroundColor: '#000',
      color: '#fff'
    }
  }
});

export default class Sponsors extends Component {
  render() {
    return (
      <section id="sponsors" style={STYLES.section}>
        <h2 style={STYLES.h2}>Sponsors</h2>
        <p style={STYLES.p}>
          Want to help support React Rally? We'd love to talk with you.<br/>
          <ButtonLink
            href={Links.SPONSOR_PROSPECTUS}
            style={STYLES.buttonLink}
          >
            Download our prospectus
          </ButtonLink>
        </p>
      </section>
    );
  }
}
