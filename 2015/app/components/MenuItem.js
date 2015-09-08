import React, { Component } from 'react';
import StyleSheet from 'react-style';

const STYLES = StyleSheet.create({
  menuitem: {
    display: 'inline',
    listStyle: 'none',
    margin: '3.5%'
  },
  a: {
    color: '#FFF',
    fontSize: 20,
    textDecoration: 'none',
    lineHeight: '23px'
  },
  aHover: {
    textShadow: '0 0 25px rgba(255, 255, 255, 1)'
  }
});

export default class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasHover: false
    };
  }

  handleMouseOver() {
    this.setState({ hasHover: true });
  }

  handleMouseOut() {
    this.setState({ hasHover: false });
  }

  render() {
    var linkStyles = null;
    if (this.state.hasHover) {
      linkStyles = STYLES.aHover;
    }

    return (
      <li role="menuitem" style={STYLES.menuitem}>
        <a
          styles={[STYLES.a, linkStyles]}
          href="javascript://"
          data-target={this.props.target}
          onMouseOver={this.handleMouseOver.bind(this)}
          onMouseOut={this.handleMouseOut.bind(this)}
        >
          {this.props.label}
        </a>
      </li>
    );
  }
}
