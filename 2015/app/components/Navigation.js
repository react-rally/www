import React, { Component } from 'react';
import StyleSheet from 'react-style';
import EventManager from 'evtmgr';
import { Styles, Sizes } from 'helpers/constants';
import morph from 'helpers/morph';
import MenuItem from 'components/MenuItem';

const TOP = Sizes.HOME_HEIGHT - Sizes.NAV_HEIGHT;
const STYLES = StyleSheet.create({
  menu: {
    background: Styles.BG_COLOR_NAVBAR,
    textAlign: 'center',
    padding: 10,
    margin: 0,
    left: 0,
    right: 0,
    zIndex: 1000
  },
  menubar: {
    margin: 'inherit 0',
    padding: 0
  }
});

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pinned: false
    };

    this.evtmgr = new EventManager();
    this.evtmgr.register(window, 'scroll', this.handleWindowScroll.bind(this));
  }

  componentDidMount() {
    this.evtmgr.attach();
    setTimeout(() => {
      this.adjustScrollTop(location.hash.replace(/^#/, ''));
    }, 0);
  }

  componentWillUnmount() {
    this.evtmgr.detach();
  }

  handleWindowScroll() {
    this.setState({
      pinned: document.body.scrollTop >= TOP
    });
  }

  handleClick(e) {
    if (e.target.nodeName === 'A') {
      var id = e.target.getAttribute('data-target');
      this.adjustScrollTop(id);
    }
  }

  adjustScrollTop(id) {
    var target = document.getElementById(id);
    if (target) {
      morph(document.body, 250, {
        // Set document scroll top to the offset top of the target minus nav height
        scrollTop: target.offsetTop - Sizes.NAV_HEIGHT
      }, () => {
        // Setting hash will negate the nav height offset
        // Simply set the value again after animation, and hash have been set
        location.hash = '#' + id;
        document.body.scrollTop = target.offsetTop - Sizes.NAV_HEIGHT;
      });
    }
  }

  render() {
    var menuStyles = {};
    if (this.state.pinned) {
      var contentWidth = document.getElementById('container').firstChild.offsetWidth;
      var offset = (window.innerWidth - contentWidth) / 2;

      menuStyles.position = 'fixed';
      menuStyles.top = 0;
      menuStyles.left = offset;
      menuStyles.right = offset;
    } else {
      menuStyles.position = 'absolute';
      menuStyles.top = TOP;
    }

    return (
      <menu styles={[STYLES.menu, menuStyles]} onClick={this.handleClick.bind(this)}>
        <ul role="menubar" style={STYLES.menubar}>
          <MenuItem target="home" label="Home"/>
          <MenuItem target="about" label="About"/>
          <MenuItem target="speakers" label="Speakers"/>
          <MenuItem target="schedule" label="Schedule"/>
          <MenuItem target="tickets" label="Tickets"/>
          <MenuItem target="venue" label="Venue"/>
          <MenuItem target="sponsors" label="Sponsors"/>
          <MenuItem target="conduct" label="Conduct"/>
        </ul>
      </menu>
    );
  }
}
