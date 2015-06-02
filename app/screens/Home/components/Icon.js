import React, {Component, PropTypes} from 'react';
import StyleSheet from 'react-style';

const STYLES = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: 20,
    width: 24,
    height: 24
  },
});

export default class Icon extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleImageMouseOver() {
    this.setState({ imageHover: true });
  }

  handleImageMouseOut() {
    this.setState({ imageHover: false });
  }
  
  createHoverStyle(right) {
    return {
      width: 32,
      height: 32,
      top: 16,
      right
    };
  }

  render() {
    var hoverStyle = null;

    if (this.state.imageHover) {
      hoverStyle = this.createHoverStyle(this.props.right - 4);
    }

    return (
      <a href={this.props.href} target="_blank">
        <img src={this.props.src}
          title={this.props.title} alt={this.props.alt}
          styles={[STYLES.icon, {right: this.props.right}, hoverStyle]}
          onMouseOver={this.handleImageMouseOver.bind(this)}
          onMouseOut={this.handleImageMouseOut.bind(this)}
        />
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
