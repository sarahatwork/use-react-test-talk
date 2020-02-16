import React, { useState } from 'react';

export default function Switch() {
  const [isOn, setIsOn] = useState(false);

  function toggleSwitch() {
    setIsOn(currentValue => !currentValue);
  }

  return (
    <div>
      <span data-testid="label" className="text">
        The toggle is: {isOn ? 'On' : 'Off'}
      </span>
      <button onClick={toggleSwitch}>Toggle</button>
    </div>
  );
}
