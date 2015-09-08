import React, { Component, PropTypes } from 'react';
import StyleSheet from 'react-style';
import { Styles } from 'helpers/constants';

const STYLES = StyleSheet.create({
  container: {
    width: '20%',
    textAlign: 'center',
    color: 'rgb(180, 180, 180)',
    float: 'left'
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    border: '2px solid #fff'
  },
  a: {
    color: Styles.FONT_COLOR_ORGANIZERS,
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  },
  h4: {
    margin: '5px 0',
    fontWeight: 'normal'
  }
});

export default class Avatar extends Component {
  renderLink(content) {
    return (
      <a href={'//twitter.com/' + this.props.twitter} style={STYLES.a} target="_blank">
        {content}
      </a>
    );
  }

  render() {
    return (
      <div style={STYLES.container}>
        {this.renderLink(<img src={this.props.url} style={STYLES.img}/>)}
        <h4 style={STYLES.h4}>
          {this.renderLink(this.props.name)}
        </h4>
        <small>({this.props.role})</small>
      </div>
    );
  }
}

Avatar.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
  twitter: PropTypes.string
};
