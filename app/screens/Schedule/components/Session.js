import React, { Component, PropTypes } from 'react';
import StyleSheet from 'react-style';
import { Styles } from 'helpers/constants';
import borderRadius from 'helpers/borderRadius';

// rgb(48, 96, 125)

const STYLES = StyleSheet.create({
  container: {
    background: 'rgb(27, 54, 70)',
    padding: '20px 50px',
    width: 300
  },
  topic: {
    color: Styles.FONT_COLOR_SCHEDULE__TOPIC
  },
  description: {
    color: Styles.FONT_COLOR_SCHEDULE__DESCRIPTION
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
    var containerStyles = STYLES.container;
    borderRadius(
      containerStyles,
      randomRadius(),
      randomRadius(),
      randomRadius(),
      randomRadius()
    );

    return (
      <div style={containerStyles}>
        <div style={STYLES.topic}>{this.props.topic}</div>
        <div style={STYLES.description}>{this.props.description}</div>
      </div>
    );
  }
}

Session.propTypes = {
  topic: PropTypes.string,
  description: PropTypes.string
};
