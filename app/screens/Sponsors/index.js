import React, { Component } from 'react';
import { Styles, Links } from 'helpers/constants';

const STYLES = {
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
  a: {
    color: Styles.FONT_COLOR_SPONSORS
  }
};

export default class Sponsors extends Component {
  render() {
    return (
      <section id="sponsors" style={STYLES.section}>
        <h2 style={STYLES.h2}>Sponsors</h2>
        <p>
          Interested in being a sponsor?
          Please <a href={Links.SPONSOR_PROSPECTUS} style={STYLES.a} target="_blank">download the prospectus</a>.
        </p>
        {/*
        <div style={STYLES.content}>
          <div style={STYLES.img}></div>
          <div style={STYLES.img}></div>
          <div style={STYLES.img}></div>
          <div style={STYLES.img}></div>
          <div style={STYLES.img}></div>
        </div>
        */}
      </section>
    );
  }
}
