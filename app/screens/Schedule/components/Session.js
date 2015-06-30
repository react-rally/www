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
    width: 400,
    minHeight: 60,
    position: 'relative'
  },
  time: {
    marginLeft: 5
  },
  title: {
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
  },
  contentLeft: {
    position: 'relative',
    left: -25,
    color: '#fff',
    width: 65,
    textAlign: 'center'
  },
  contentRight: {
    position: 'relative',
    top: -85,
    marginBottom: -85,
    marginLeft: 55
  },
  avatar: {
    width: 50,
    height: 50,
    marginTop: 2,
    boxSizing: 'border-box',
    borderRadius: 25,
    border: '1px solid #fff'
  }
});

function randomBoolean() {
  return Math.floor(Math.random() * 2) === 0;
}

function randomRadius(factor = 150) {
  return randomBoolean() ? Math.floor(Math.random() * factor) : 0;
}

export default class Session extends Component { 
  render() {
    var contentStyles = STYLES.content;
    var poleStyles = STYLES.pole;

    borderRadius(
      contentStyles,
      randomRadius(85), // Don't crowd time/clock
      randomRadius(),
      randomRadius(),
      randomRadius(90) // Don't crowd avatar
    );

    contentStyles.minHeight = this.props.speaker ? 115 : 60;
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
          <div style={STYLES.contentLeft}>
            <i className="fa fa-clock-o"></i>
            <small style={STYLES.time}>{this.props.session.time}</small>
          {this.props.speaker && (
            <img style={STYLES.avatar} src={this.props.speaker.image}/>
          )}
          </div>
          <div styles={[STYLES.contentRight, {top: this.props.speaker ? -85 : -25}]}>
            <div style={STYLES.title}>{this.props.session.title}</div>
            <div style={STYLES.description}>{this.props.speaker ? this.props.speaker.name : ''}</div>
          </div>
        </div>
      </div>
    );
  }
}

Session.propTypes = {
  orient: PropTypes.oneOf(['left', 'right']),
  session: PropTypes.shape({
    time: PropTypes.string,
    title: PropTypes.string
  }),
  speaker: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string
  })
};
