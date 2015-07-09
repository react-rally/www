import React, { Component } from 'react';
import StyleSheet from 'react-style';
import { Styles, Links } from 'helpers/constants';
import sponsors from 'helpers/sponsors';
import ButtonLink from 'components/ButtonLink';

const STYLES = StyleSheet.create({
  section: {
    background: `url(assets/dist/img/weatheredBackground.png) ${Styles.BG_COLOR_SPONSORS}`,
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

class Sponsor extends Component {
  render() {
    return (
      <div style={STYLES.img}>
        <a href={this.props.url} target="_blank">
          <img src={this.props.imageUrl} alt={this.props.name} />
        </a>
      </div>
    )
  }
}

Sponsor.propTypes = {
  url: React.PropTypes.string.isRequired,
  imageUrl: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired
};

export default class Sponsors extends Component {
  renderSponsor(sponsor, i) {
    return <Sponsor key={i} name={sponsor.name} url={sponsor.url} imageUrl={sponsor.imageUrl} />
  }

  render() {
    return (
      <section id="sponsors" style={STYLES.section}>
        {/*
        <h3 style={STYLES.h3}>Premier</h3>
        <h3 style={STYLES.h3}>Platinum</h3>
        <h3 style={STYLES.h3}>Gold</h3>
        <h3 style={STYLES.h3}>Silver</h3>
        */}
        <h2 style={STYLES.h2}>Sponsors</h2>
        <h3 style={STYLES.h3}>Supporters</h3>
        <div style={STYLES.content}>
          {sponsors.supporters.map(this.renderSponsor)}
        </div>
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
