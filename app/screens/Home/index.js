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
  renderTitle() {
    return 'ReactRally!'.split('').map((chr, i) => <div key={`${chr}-${i}`}>{chr}</div>);
  }

  render() {
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
        </div>
      </div>
    );
  }
}
