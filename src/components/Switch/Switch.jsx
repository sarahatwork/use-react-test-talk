import React from 'react';
import './Switch.css';

export default class Switch extends React.Component {
  state = {
    isOn: false
  };

  toggleSwitch = () => {
    this.setState({ isOn: !this.state.isOn });
  };

  render() {
    return (
      <div>
        <span data-testid="label" className="text">
          The toggle is: {this.state.isOn ? 'On' : 'Off'}
        </span>
        <button onClick={this.toggleSwitch}>Toggle</button>
      </div>
    );
  }
}
