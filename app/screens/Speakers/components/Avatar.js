import React, { Component, PropTypes } from 'react';
import Radium from 'radium'
import StyleSheet from 'react-style';
import { Styles } from 'helpers/constants';

const SOCIAL_LINK_HEIGHT = 80;
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
    top: 0,
    position: 'relative',
    width: 200,
    height: SOCIAL_LINK_HEIGHT,
    transition: 'top 150ms'
  },
  linkContainerMouseOver: {
    top: -SOCIAL_LINK_HEIGHT
  },
  socialLink: {
    width: 100,
    height: SOCIAL_LINK_HEIGHT,
    paddingTop: 15,
    display: 'inline-block',
    position: 'absolute',
    transition: 'background-color 150ms'
  },
  socialLinkFull: {
    width: 200
  },
  twitterLink: {
    backgroundColor: 'rgba(43, 155, 197, 0.8)',
    left: 0,
    ':hover': {
      backgroundColor: 'rgba(43, 155, 197, 1)'
    }
  },
  githubLink: {
    backgroundColor: 'rgba(51, 51, 51, 0.8)',
    right: 0,
    ':hover': {
      backgroundColor: 'rgba(51, 51, 51, 1)'
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
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleContainerMouseOver() {
    this.setState({
      containerMouseOver: true
    });
  }

  handleContainerMouseOut() {
    this.setState({
      containerMouseOver: false
    });
  }

  render() {
    var containerStyle = this.state.containerMouseOver ?
                          STYLES.linkContainerMouseOver :
                          null;
    var twitterFullStyle = this.props.twitter && !this.props.github ?
                            STYLES.socialLinkFull :
                            null;
    var githubFullStyle = this.props.github && !this.props.twitter ?
                            STYLES.socialLinkFull :
                            null;

    return (
      <div style={STYLES.content}>
        <img style={STYLES.imgBackground} src="assets/img/avatarBackground.png"/>
        <div
          style={STYLES.avatarContainer}
          onMouseOver={this.handleContainerMouseOver.bind(this)}
          onMouseOut={this.handleContainerMouseOut.bind(this)}
        >
          <img style={STYLES.imgAvatar} src={this.props.url}/>
          <div styles={[STYLES.linkContainer, containerStyle]}>
          {this.props.twitter && (
            <a
              ref="twitterLink"
              target="_blank"
              title={'Follow ' + this.props.name.split(' ')[0] + ' on Twitter'}
              href={'//twitter.com/' + this.props.twitter}
              styles={[STYLES.socialLink, STYLES.twitterLink, twitterFullStyle]}
            >
              <img src="assets/img/twitter32.png"/>
            </a>
          )}
          {this.props.github && (
            <a
              ref="githubLink"
              target="_blank"
              title={'Follow ' + this.props.name.split(' ')[0] + ' on GitHub'}
              href={'//github.com/' + this.props.github}
              styles={[STYLES.socialLink, STYLES.githubLink, githubFullStyle]}
            >
              <img src="assets/img/github32.png"/>
            </a>
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
