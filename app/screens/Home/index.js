import React, { Component } from 'react';
import StyleSheet from 'react-style';
import browser from 'helpers/browser';
import cssPrefix from 'helpers/cssPrefix';
import { Sizes } from 'helpers/constants';

const STYLES = StyleSheet.create({
  container: {
    background: 'url(assets/img/SLCBackground.png)',
    position: 'relative',
    overflow: 'hidden'
  },
  content: {
    height: Sizes.HOME_HEIGHT,
    background: 'url(assets/img/SLCcity.png) no-repeat -325px 375px'
  },
  title: {
    fontFamily: 'true_crimesregular',
    position: 'absolute',
    margin: 0,
    color: 'rgb(255, 241, 2)',
    textShadow: 'rgb(171, 160, 3) -10px 5px 0',
    top: browser.firefox ? -50 : ''
  },
  subtitle: {
    top: browser.firefox ? 175 : 200,
    left: 400,
    fontSize: 100,
    color: 'rgb(180, 180, 180)',
    textShadow: '-5px 5px 0 rgb(112, 112, 112)',
    fontFamily: 'true_crimesregular',
    position: 'absolute'
  },
  h2: {
    color: 'rgb(236, 236, 236)',
    fontFamily: 'inherit',
    fontSize: 35,
    position: 'absolute',
    top: 300,
    left: 125
  },
  imgTwitter: {
    position: 'absolute',
    top: 20,
    right: 55,
    width: 24,
    height: 24
  },
  imgGithub: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 24,
    height: 24
  },
  imgMoon: {
    position: 'absolute',
    top: -250,
    right: -250
  },
  imgUfoMain: {
    position: 'absolute',
    top: 300,
    right: '35%'
  },
  imgUfoDarkOne: {
    position: 'absolute',
    top: 500,
    right: '10%'
  },
  imgUfoDarkTwo: {
    position: 'absolute',
    top: 375,
    right: '25%',
    width: 286/2,
    height: 172/2
  }
});

STYLES.imgUfoDarkTwo[cssPrefix('transform')] = 'rotate(-25deg)';
STYLES.imgUfoDarkTwo['transform'] = 'rotate(-25deg)';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleTwitterMouseOver() {
    this.setState({ twitterHover: true });
  }

  handleTwitterMouseOut() {
    this.setState({ twitterHover: false });
  }

  handleGithubMouseOver() {
    this.setState({ githubHover: true });
  }

  handleGithubMouseOut() {
    this.setState({ githubHover: false });
  }

  createHoverStyle(right) {
    return {
      width: 32,
      height: 32,
      top: 16,
      right
    };
  }

  renderTitle() {
    return 'ReactRally!'.split('').map((chr, i) => <div key={`${chr}-${i}`}>{chr}</div>);
  }

  render() {
    var twitterStyle = null;
    var githubStyle = null;

    if (this.state.twitterHover) {
      twitterStyle = this.createHoverStyle(51);
    }

    if (this.state.githubHover) {
      githubStyle = this.createHoverStyle(16);
    }

    return (
      <div id="home" style={STYLES.container}>
        <div style={STYLES.content}>
          <img src="assets/img/moon.png" style={STYLES.imgMoon}/>
          <img src="assets/img/ufoMain.png" style={STYLES.imgUfoMain}/>
          <img src="assets/img/ufoDark.png" style={STYLES.imgUfoDarkOne}/>
          <img src="assets/img/ufoDark.png" style={STYLES.imgUfoDarkTwo}/>
          <div id="title" style={STYLES.title}>
            {this.renderTitle()}
          </div>
          <div style={STYLES.subtitle}>2015</div>
          <h2 style={STYLES.h2}>August 24-25 in Salt Lake City, UT</h2>
        </div>
        <div>
          <a href="http://twitter.com/ReactRally" target="_blank">
            <img src="assets/img/twitterIcon.png"
              styles={[STYLES.imgTwitter, twitterStyle]}
              onMouseOver={this.handleTwitterMouseOver.bind(this)}
              onMouseOut={this.handleTwitterMouseOut.bind(this)}
            />
          </a>
          <a href="http://github.com/react-rally" target="_blank">
            <img src="assets/img/githubIcon.png"
              styles={[STYLES.imgGithub, githubStyle]}
              onMouseOver={this.handleGithubMouseOver.bind(this)}
              onMouseOut={this.handleGithubMouseOut.bind(this)}
            />
          </a>
        </div>

      </div>
    );
  }
}
