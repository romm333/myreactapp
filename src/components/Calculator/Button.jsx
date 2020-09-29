/* eslint-disable quote-props */
import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import './Button.css';

class Button extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.name);
  };

  render() {
    return (
      <div
        className={ClassNames(
          'button--root',
          { operator: this.props.operator },
          { wide: this.props.wide }
        )}
      >
        <button type="button" onClick={this.handleClick}>
          {this.props.name}
        </button>
      </div>
    );
  }
}

Button.defaultProps = {
  operator: false,
  wide: false
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  operator: PropTypes.bool,
  wide: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default Button;
