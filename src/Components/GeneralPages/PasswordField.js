import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import zxcvbn from 'zxcvbn';

import FormField from './FormField';

class PasswordField extends Component {

  constructor(props) {

    super(props);
    const { minStrength = 3, thresholdLength = 7 } = props;

    this.minStrength = minStrength

    this.thresholdLength = typeof thresholdLength === 'number'
      ? Math.max(thresholdLength, 7)
      : 7;
    this.state = { password: '', strength: 0, word: '' };
  }

  stateChanged = state => {
    const words = ["Very weak", "Weak", "So-so", "Good", "Great"]
    const strength = zxcvbn(state.value).score
    const word = words[strength]

    this.setState({
      password: state.value,
      strength: strength,
      word: state.value ? word : ''
    }, () => this.props.onStateChanged(state));

  };

  validatePasswordStrong = value => {
    if (value.length <= this.thresholdLength) throw new Error("Password is short");
    if (zxcvbn(value).score < this.minStrength) throw new Error("Password is weak");
  };

  render() {
    const { type, validator, onStateChanged, children, ...restProps } = this.props;
    const { password, strength, word } = this.state;

    return (
      <Fragment>
        <div className="position-relative">
          <FormField type="password" validator={this.validatePasswordStrong} onStateChanged={this.stateChanged} {...restProps}>
            <div className="strength-meter my-4">
              <div className="strength-meter-fill" data-strength={strength}>
              </div>
              <div className="position-absolute password-strength" data-strength={strength}>{word}</div>
            </div>
            <span className="d-block form-hint">Passwords must be at least 6 characters long, and can't be things like "password", "123456" or "abcdef".</span>
            {children}
          </FormField>
        </div>
      </Fragment>
    );
  }

}

PasswordField.propTypes = {
  label: PropTypes.string.isRequired,
  fieldId: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  children: PropTypes.node,
  onStateChanged: PropTypes.func,
  minStrength: PropTypes.number,
  thresholdLength: PropTypes.number
};

export default PasswordField;
