import React, { Component } from 'react';
import StyleSheet from 'react-style';
import { Styles } from 'helpers/constants';

const STYLES = StyleSheet.create({
  divider: {
    background: Styles.BG_COLOR_DIVIDER,
    height: 50,
    position: 'relative'
  }
});

export default class Divider extends Component {
  render() {
    return (
      <div style={STYLES.divider}></div>
    );
  }
}
