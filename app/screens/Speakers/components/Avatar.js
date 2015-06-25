import React, { Component, PropTypes } from 'react';
import Radium from 'radium'
import StyleSheet from 'react-style';
import { Styles } from 'helpers/constants';

const SOCIAL_LINK_HEIGHT = 100;
const STYLES = StyleSheet.create({
  content: {
    display: 'inline-block',
    margin: 10,
    width: 389,
    position: 'relative',
    paddingTop: 400
  },
  imgBackground: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  imgAvatar: {
  },
  avatarContainer: {
    borderRadius: 100,
    position: 'absolute',
    top: 100,
    left: 77,
    width: 200,
    height: 200,
    overflow: 'hidden'
  },
  linkContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 180,
    height: 180,
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
    fontSize: 32,
    paddingTop: 74,
    margin: '0 10px',
    display: 'inline-block',
    ':hover': {
      color: '#ccc'
    }
  },
  name: {
    color: Styles.FONT_COLOR_SPEAKERS__NAME,
    fontWeight: 'bold',
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
        title={'Follow ' + this.props.name.split(' ')[0] + ' on ' + social}
        href={'//' + prop + '.com/' + this.props[prop]}
        style={STYLES.socialLink}
      >
        <i className={'fa fa-' + prop}/>
      </a>
    );
  }

  render() {
    return (
      <div style={STYLES.content}>
        <img style={STYLES.imgBackground} src="assets/img/avatarBackground.png"/>
        <div
          style={STYLES.avatarContainer}
        >
          <img style={STYLES.imgAvatar} src={this.props.url}/>
          <div style={STYLES.linkContainer}>
          {this.props.twitter && (
            this.renderSocialLink('Twitter')
          )}
          {this.props.github && (
            this.renderSocialLink('GitHub')
          )}
          </div>
        </div>
        <div style={STYLES.name}>{this.props.name}</div>
        <div style={STYLES.intro}>{this.props.intro}</div>
      </div>
    );
  }
}

Avatar.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  github: PropTypes.string,
  twitter: PropTypes.string,
  intro: PropTypes.oneOfType([
    PropTypes.string,
    React.PropTypes.element
  ])
};

Avatar = Radium.Enhancer(Avatar);
export default Avatar;
