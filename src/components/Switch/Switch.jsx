import React from 'react';
import './Switch.css';
import Label from '../Label/Label';

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
        <Label data-testid="label" className="text">
          {this.state.isOn ? 'On' : 'Off'}
        </Label>
        <button onClick={this.toggleSwitch}>Toggle</button>
      </div>
    );
  }
}
