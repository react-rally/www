import React, { Component } from 'react';
import StyleSheet from 'react-style';
import browser from 'helpers/browser';
import cssPrefix from 'helpers/cssPrefix';
import { Sizes, Links } from 'helpers/constants';
import Radium from 'radium'
import Icon from './components/Icon';

const STYLES = StyleSheet.create({
  container: {
    background: 'url(assets/img/SLCBackground.png)',
    lineHeight: 'inherit',
    padding: 0,
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
    top: browser.firefox ? -50 : null
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
  wrapper: {
    position: 'absolute',
    top: 300,
    left: 125,
    width: 600,
    height: 425,
    color: '#fff'
  },
  h2: {
    color: 'rgb(236, 236, 236)',
    fontFamily: 'inherit',
    fontSize: 35
  },
  imgMoon: {
    position: 'absolute',
    top: -250,
    right: -250
  },
  imgUfoMain: {
    position: 'absolute',
    top: 325,
    right: '20%'
  },
  imgUfoDarkOne: {
    position: 'absolute',
    top: 500,
    right: '5%'
  },
  imgUfoDarkTwo: {
    position: 'absolute',
    top: 375,
    right: '20%',
    width: 286/2,
    height: 172/2
  },
  buttonLink: {
    background: 'transparent',
    border: '1px solid #fff',
    borderRadius: 5,
    color: '#fff',
    display: 'inline-block',
    fontSize: 20,
    padding: '10px 35px',
    textDecoration: 'none',
    position: 'relative',
    top: 25,
    left: 175,
    ':hover': {
      backgroundColor: '#fff',
      color: '#000'
    }
  }
});

STYLES.imgUfoDarkTwo[cssPrefix('transform')] = 'rotate(-25deg)';
STYLES.imgUfoDarkTwo['transform'] = 'rotate(-25deg)';

class Home extends Component {
  renderTitle() {
    return 'ReactRally!'.split('').map((chr, i) => <div key={`${chr}-${i}`}>{chr}</div>);
  }

  render() {
    return (
      <section id="home" style={STYLES.container}>
        <div style={STYLES.content}>
          <img src="assets/img/moon.png" style={STYLES.imgMoon}/>
          <img src="assets/img/ufoMain.png" style={STYLES.imgUfoMain}/>
          <img src="assets/img/ufoDark.png" style={STYLES.imgUfoDarkOne}/>
          <img src="assets/img/ufoDark.png" style={STYLES.imgUfoDarkTwo}/>
          <div id="title" style={STYLES.title}>
            {this.renderTitle()}
          </div>
          <div style={STYLES.subtitle}>2015</div>
          <div style={STYLES.wrapper}>
            <h2 style={STYLES.h2}>August 24-25 in Salt Lake City, UT</h2>
            <p>
              Facebook's ReactJS has taken client side development by storm.
              From single-page apps, to server rendering, to native mobile, to apps on your TV, ReactJS is everywhere.
              Come find out what makes it so incredible.
            </p>
            <a key="buy" href={Links.TICKET_SALES} target="_blank" style={STYLES.buttonLink}>
              Buy A Ticket!
            </a>
          </div>
        </div>
        <Icon
          href="http://eepurl.com/biqrcn"
          src="assets/img/emailIcon.png"
          alt="Email icon"
          title="Subscribe for updates"
          right={90}
        />
        <Icon
          href="http://twitter.com/ReactRally"
          src="assets/img/twitterIcon.png"
          alt="Twitter logo"
          title="Follow us on Twitter"
          right={55}
        />
        <Icon
          href="http://github.com/react-rally"
          src="assets/img/githubIcon.png"
          alt="GitHub logo"
          title="Follow us on GitHub"
          right={20}
        />
      </section>
    );
  }
}

Home = Radium.Enhancer(Home);
export default Home;
