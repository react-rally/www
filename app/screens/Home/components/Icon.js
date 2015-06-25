import React, {Component, PropTypes} from 'react';
import StyleSheet from 'react-style';

const STYLES = StyleSheet.create({
  a: {
    boxSizing: 'border-box',
    borderRadius: 16,
    backgroundColor: 'rgb(59, 56, 67)',
    color: 'rgb(215, 215, 215)',
    display: 'inline-block',
    paddingTop: 4,
    width: 24,
    height: 24,
    position: 'absolute',
    textAlign: 'center',
    top: 20,
    fontSize: 16
  },
});

export default class Icon extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleImageMouseOver() {
    this.setState({ hasHover: true });
  }

  handleImageMouseOut() {
    this.setState({ hasHover: false });
  }
  
  createHoverStyle(right) {
    return {
      width: 32,
      height: 32,
      top: 16,
      fontSize: 24,
      paddingTop: 2,
      right
    };
  }

  render() {
    var hoverStyle = null;

    if (this.state.hasHover) {
      hoverStyle = this.createHoverStyle(this.props.right - 4);
    }

    return (
      <a
        href={this.props.href}
        title={this.props.title}
        alt={this.props.alt}
        target="_blank"
        onMouseOver={this.handleImageMouseOver.bind(this)}
        onMouseOut={this.handleImageMouseOut.bind(this)}
        styles={[STYLES.a, {right: this.props.right}, hoverStyle]}
      >
        <i className={'fa fa-' + this.props.src}/>
      </a>
    );
  }
}

Icon.propTypes = {
  right: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
  alt: PropTypes.string
};
