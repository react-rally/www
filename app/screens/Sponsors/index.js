import React, { Component } from 'react';
import StyleSheet from 'react-style';
import { Styles, Links } from 'helpers/constants';
import SponsorsData from '../../../api/sponsors';
import Sponsor from './components/Sponsor';
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
  renderSponsorSection(title, data) {
    var result;
    if (data) {
      var sponsors;
      if (Array.isArray(data)) {
        sponsors = data.map(this.renderSponsor);
      } else {
        sponsors = this.renderSponsor(data);
      }

      result = (
        <div>
          <h3 style={STYLES.h3}>{title}</h3>
          <div style={STYLES.content}>
            {sponsors}
          </div>
        </div>
      );
    } else {
      result = <noscript/>;
    }
    return result;
  }

  renderSponsor(sponsor, i) {
    return <Sponsor key={i} name={sponsor.name} url={sponsor.url} image={sponsor.image} />
  }

  render() {
    return (
      <section id="sponsors" style={STYLES.section}>
        <h2 style={STYLES.h2}>Sponsors</h2>
        {this.renderSponsorSection('Premier', SponsorsData.premier)}
        {this.renderSponsorSection('Platinum', SponsorsData.platinum)}
        {this.renderSponsorSection('Gold', SponsorsData.gold)}
        {this.renderSponsorSection('Silver', SponsorsData.silver)}
        {this.renderSponsorSection('Supporters', SponsorsData.supporters)}
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
