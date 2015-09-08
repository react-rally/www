import React, { Component, PropTypes } from 'react';
import StyleSheet from 'react-style';
import Radium from 'radium'

const STYLES = StyleSheet.create({
  a: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#fff',
    borderRadius: 5,
    color: '#fff',
    display: 'inline-block',
    fontSize: 20,
    padding: '10px 35px',
    margin: 25,
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    ':hover': {
      backgroundColor: '#fff',
      color: '#000'
    }
  }
});

class ButtonLink extends Component {
  render() {
    return (
      <a href={this.props.href} target="_blank" styles={[STYLES.a, this.props.style]}>
        {this.props.children}
      </a>
    );
  }
}

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  style: PropTypes.object
};

ButtonLink = Radium.Enhancer(ButtonLink);
export default ButtonLink;

