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
  content: {
    textAlign: 'center'
  },
  img: {
    width: 150,
    height: 150,
    background: '#999',
    borderRadius: 75,
    display: 'inline-block',
    margin: 100
  },
  p: {
    textAlign: 'center'
  }
});

export default class Sponsors extends Component {
  render() {
    return (
      <section id="sponsors" style={STYLES.section}>
        <h2 style={STYLES.h2}>Sponsors</h2>
        {/*
        <div style={STYLES.content}>
          <div style={STYLES.img}></div>
          <div style={STYLES.img}></div>
          <div style={STYLES.img}></div>
          <div style={STYLES.img}></div>
          <div style={STYLES.img}></div>
        </div>
        */}
        <p style={STYLES.p}>
          Want to help support React Rally? We'd love to talk with you.<br/>
          <ButtonLink href={Links.SPONSOR_PROSPECTUS}>Download our prospectus</ButtonLink>
        </p>
      </section>
    );
  }
}
