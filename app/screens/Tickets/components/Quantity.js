import React, { Component, PropTypes } from 'react';

export default class Quantity extends Component { 
  constructor(props) {
      super(props);
      this.state = {
        value: parseInt(props.val || props.min, 10) || 0
      };
  }

  handleValueChange() {
    var value = parseInt(this.refs.value.getDOMNode().value, 10) || 0;
    value = Math.max(value, this.props.min);
    value = Math.min(value, this.props.max);
    this.setState({ value });
  }

  handleMinusClick() {
    this.setState({ value: Math.max(this.state.value - 1, this.props.min) });
  }

  handlePlusClick() {
    this.setState({ value: Math.min(this.state.value + 1, this.props.max) });
  }

  render() {
    return (
      <div>
        <button ref="minus" onClick={this.handleMinusClick.bind(this)}>-</button>
        <input ref="value" value={this.state.value} onChange={this.handleValueChange.bind(this)}/>
        <button ref="plus" onClick={this.handlePlusClick.bind(this)}>+</button>
      </div>
    );
  }
}

Quantity.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  val: PropTypes.number
};

Quantity.defaultProps = {
  max: 10,
  min: 0,
  val: 0
};
