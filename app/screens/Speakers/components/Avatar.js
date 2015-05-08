import React, { Component, PropTypes } from 'react';
import { Styles } from 'helpers/constants';

const STYLES = {
  content: {
    float: 'left',
    margin: 10,
    width: 389,
    position: 'relative',
    paddingTop: 400
  },
  imgBackground: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  imgAvatar: {
    borderRadius: 100,
    position: 'absolute',
    top: 100,
    left: 77,
    width: 200,
    height: 200
  },
  name: {
    color: Styles.FONT_COLOR_SPEAKERS__NAME,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
  intro: {
    color: Styles.FONT_COLOR_SPEAKERS__INTRO,
    textAlign: 'center'
  }
};

export default class Avatar extends Component {
  render() {
    return (
      <div style={STYLES.content}>
        <img style={STYLES.imgBackground} src="assets/img/avatarBackground.png"/>
        <img style={STYLES.imgAvatar} src={this.props.url}/>
        <div style={STYLES.name}>{this.props.name}</div>
        <div style={STYLES.intro}>{this.props.intro}</div>
      </div>
    );
  }
}

Avatar.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  intro: PropTypes.oneOfType([
    PropTypes.string,
    React.PropTypes.element
  ])
};
