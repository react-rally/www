import React, { Component, PropTypes } from 'react';
import Radium from 'radium'
import StyleSheet from 'react-style';
import { Styles } from 'helpers/constants';

const SCALE = .5;
const STYLES = StyleSheet.create({
  content: {
    display: 'inline-block',
    margin: '10px 30px',
    width: 389*SCALE,
    position: 'relative',
    paddingTop: 400*SCALE
  },
  imgBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 389*SCALE,
    height: 396*SCALE
  },
  imgAvatar: {
    width: 200*SCALE,
    height: 200*SCALE
  },
  avatarContainer: {
    borderRadius: 100,
    position: 'absolute',
    top: 100*SCALE,
    left: 77*SCALE,
    width: 200*SCALE,
    height: 200*SCALE,
    overflow: 'hidden'
  },
  linkContainer: {
    position: 'absolute',
    top: 10*SCALE,
    left: 10*SCALE,
    width: 180*SCALE,
    height: 180*SCALE,
    transition: 'opacity 150ms',
    overflow: 'hidden',
    borderRadius: 100,
    backgroundColor: 'rgb(51, 51, 51)',
    opacity: 0,
    ':hover': {
      opacity: 0.8
    }
  },
  socialLink: {
    color: '#fff',
    fontSize: 32*(SCALE*1.5),
    paddingTop: 74*SCALE,
    margin: '0 5px',
    display: 'inline-block',
    ':hover': {
      color: '#ccc'
    }
  },
  name: {
    color: Styles.FONT_COLOR_SPEAKERS__INTRO,
    textAlign: 'center',
    marginBottom: 10
  },
  intro: {
    color: Styles.FONT_COLOR_SPEAKERS__INTRO,
    textAlign: 'center'
  }
});

class Avatar extends Component {
  renderSocialLink(social) {
    var prop = social.toLowerCase();
    return (
      <a
        key={prop}
        target="_blank"
        title={'Follow ' + this.props.speaker.name.split(' ')[0] + ' on ' + social}
        href={'//' + prop + '.com/' + this.props.speaker[prop]}
        style={STYLES.socialLink}
      >
        <i className={'fa fa-' + prop}/>
      </a>
    );
  }

  render() {
    return (
      <div style={STYLES.content}>
        <img style={STYLES.imgBackground} src="assets/dist/img/avatarBackground.png"/>
        <div style={STYLES.avatarContainer}>
          <img style={STYLES.imgAvatar} src={this.props.speaker.image}/>
          <div style={STYLES.linkContainer}>
          {this.props.speaker.twitter && (
            this.renderSocialLink('Twitter')
          )}
          {this.props.speaker.github && (
            this.renderSocialLink('GitHub')
          )}
          </div>
        </div>
        <div style={STYLES.name}>{this.props.speaker.name}</div>
        {/*<div style={STYLES.intro}>{this.props.speaker.intro}</div>*/}
      </div>
    );
  }
}

Avatar.propTypes = {
  speaker: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    github: PropTypes.string,
    twitter: PropTypes.string,
    intro: PropTypes.oneOfType([
      PropTypes.string,
      React.PropTypes.element
    ])
  })
};

Avatar = Radium.Enhancer(Avatar);
export default Avatar;
