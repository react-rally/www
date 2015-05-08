import React, { Component } from 'react';
import EventManager from 'evtmgr';
import { Styles, Sizes } from 'helpers/constants';
import morph from 'helpers/morph';

const TOP = Sizes.HOME_HEIGHT - Sizes.NAV_HEIGHT;
const STYLES = {
  menu: {
    background: Styles.BG_COLOR_NAVBAR,
    textAlign: 'center',
    padding: 10,
    margin: 0,
    left: 0,
    right: 0
  },
  menubar: {
    margin: 'inherit 0',
    padding: 0
  },
  menuitem: {
    display: 'inline',
    listStyle: 'none',
    margin: 50
  },
  a: {
    color: '#FFF',
    fontSize: 20,
    textDecoration: 'none'
  }
};

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
    var menuStyles = STYLES.menu;
    if (this.state.pinned) {
      menuStyles.position = 'fixed';
      menuStyles.top = 0;
    } else {
      menuStyles.position = 'absolute';
      menuStyles.top = TOP;
    }

    return (
      <menu style={menuStyles} onClick={this.handleClick}>
        <ul role="menubar" style={STYLES.menubar}>
          <li role="menuitem" style={STYLES.menuitem}><a style={STYLES.a} href="javascript://" data-target="home">Home</a></li>
          <li role="menuitem" style={STYLES.menuitem}><a style={STYLES.a} href="javascript://" data-target="about">About</a></li>
          <li role="menuitem" style={STYLES.menuitem}><a style={STYLES.a} href="javascript://" data-target="speakers">Speakers</a></li>
          <li role="menuitem" style={STYLES.menuitem}><a style={STYLES.a} href="javascript://" data-target="schedule">Schedule</a></li>
          <li role="menuitem" style={STYLES.menuitem}><a style={STYLES.a} href="javascript://" data-target="tickets">Tickets</a></li>
          <li role="menuitem" style={STYLES.menuitem}><a style={STYLES.a} href="javascript://" data-target="venue">Venue</a></li>
          <li role="menuitem" style={STYLES.menuitem}><a style={STYLES.a} href="javascript://" data-target="sponsors">Sponsors</a></li>
          <li role="menuitem" style={STYLES.menuitem}><a style={STYLES.a} href="javascript://" data-target="conduct">Conduct</a></li>
        </ul>
      </menu>
    );
  }
}
