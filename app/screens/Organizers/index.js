import React, { Component } from 'react';
import StyleSheet from 'react-style';
import EventManager from 'evtmgr';
import { Styles } from 'helpers/constants';
import browser from 'helpers/browser';
import Avatar from './components/Avatar';

const STYLES = StyleSheet.create({
  container: {
    position: browser.safari ? 'relative' : 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: 333
  },
  h2: {
    color: Styles.FONT_COLOR_ORGANIZERS
  }
});

export default class Organizers extends Component {
  constructor(props) {
    super(props);
 
    this.evtmgr = new EventManager();
    this.evtmgr.register(window, 'resize', this.handleWindowResize.bind(this));
  }

  componentDidMount() {
    this.evtmgr.attach();
    // This seems weird, but the container.firstChild element won't exist before hand
    // If this isn't done, on large displays the width bleeds outside the container
    this.forceUpdate();
  }

  componentWillUnmount() {
    this.evtmgr.detach();
  }

  handleWindowResize() {
    this.forceUpdate();
  }

  render() {
    var containerStyles = {};
    var container = document.getElementById('container');
    if (!browser.safari && container && container.firstChild) {
      let contentWidth = document.getElementById('container').firstChild.offsetWidth;
      let offset = (window.innerWidth - contentWidth) / 2;

      containerStyles.left = offset;
      containerStyles.right = offset;
    }

    return (
      <section id="organizers" styles={[STYLES.container, containerStyles]}>
        <h2 style={STYLES.h2}>Organizers</h2>
        <Avatar
          url="assets/dist/img/organizers/matt.jpeg"
          name="Matt Zabriskie"
          twitter="mzabriskie"
          role="co-organizer"
        />
        <Avatar
          url="assets/dist/img/organizers/jamison.jpeg"
          name="Jamison Dance"
          twitter="jergason"
          role="co-organizer"
        />
        <Avatar
          url="assets/dist/img/organizers/sunny.jpeg"
          name="Sunny Leggett"
          twitter="Sunny4days"
          role="admin"
        />
        <Avatar
          url="assets/dist/img/organizers/aimee.jpeg"
          name="Aimee Knight"
          twitter="Aimee_Knight"
          role="advisor"
        />
        <Avatar
          url="assets/dist/img/organizers/joe.jpeg"
          name="Joe Eames"
          twitter="josepheames"
          role="advisor"
        />
      </section>
    );
  }
}

