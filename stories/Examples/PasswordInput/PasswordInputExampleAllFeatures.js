import React from 'react';
import PasswordInput from '../../../src/components/PasswordInput';

class PasswordInputExampleAllFeatures extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: ''
    };
  }

  getQuality() {
    const length = this.state.password.length;
    return length > 10 ? 100 : length * 10;
  }

  render() {
    return (
      <div>
        <PasswordInput
          htmlId="password-input-example"
          name="password"
          onChange={event => this.setState({ password: event.target.value })}
          value={this.state.password}
          minLength={8}
          placeholder="Enter password"
          showVisibilityToggle
          quality={this.getQuality()}
          {...this.props} />
      </div>
    )
  }
}

export default PasswordInputExampleAllFeatures;