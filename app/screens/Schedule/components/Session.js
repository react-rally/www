import React, { Component, PropTypes } from 'react';
import StyleSheet from 'react-style';
import { Styles } from 'helpers/constants';
import borderRadius from 'helpers/borderRadius';

const STYLES = StyleSheet.create({
  container: {
    position: 'relative',
    margin: '0 0 100px',
    zoom: 1,
    overflow: 'auto'
  },
  content: {
    background: 'rgb(27, 54, 70)',
    padding: '20px 50px',
    width: 300,
    position: 'relative'
  },
  topic: {
    color: Styles.FONT_COLOR_SCHEDULE__TOPIC
  },
  description: {
    color: Styles.FONT_COLOR_SCHEDULE__DESCRIPTION
  },
  pole: {
    height: 4,
    backgroundColor: 'rgb(50, 96, 124)',
    position: 'absolute',
    top: '50%'
  }
});

function randomBoolean() {
  return Math.floor(Math.random() * 2) === 0;
}

function randomRadius(factor) {
  return randomBoolean() ? Math.floor(Math.random() * 150) : 0;
}

export default class Session extends Component { 
  render() {
    var contentStyles = STYLES.content;
    var poleStyles = STYLES.pole;

    borderRadius(
      contentStyles,
      randomRadius(),
      randomRadius(),
      randomRadius(),
      randomRadius()
    );

    contentStyles.left = this.props.orient === 'left' ? 100 : null;
    contentStyles.right = this.props.orient === 'right' ? 100 : null;
    poleStyles.left = this.props.orient === 'left' ? 150 : 0;
    poleStyles.right = this.props.orient === 'right' ? 150 : 0;
    if (this.props.orient === 'right') {
      contentStyles.float = 'right';
    }

    return (
      <div style={STYLES.container}>
        <div style={poleStyles}></div>
        <div style={contentStyles}>
          <div style={STYLES.topic}>{this.props.topic}</div>
          <div style={STYLES.description}>{this.props.description}</div>
        </div>
      </div>
    );
  }
}

Session.propTypes = {
  orient: PropTypes.oneOf(['left', 'right']),
  topic: PropTypes.string,
  description: PropTypes.string
};
