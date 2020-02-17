import React, { useCallback, useEffect, useState } from 'react';
import './Switch.css';

export default function Switch() {
  const [isOn, setIsOn] = useState(false);
  const [dogImage, setDogImage] = useState();

  useEffect(() => {
    const fetchDogPic = async () => {
      const res = await fetch(
        'https://dog.ceo/api/breed/chihuahua/images/random'
      );
      const out = await res.json();
      setDogImage(out.message);
    };
    if (isOn) {
      fetchDogPic();
    }
  }, [isOn]);

  const toggleSwitch = useCallback(() => {
    setIsOn(!isOn);
    setDogImage(undefined);
  }, [isOn]);

  return (
    <div>
      <span data-testid="label" className="text">
        The toggle is: {isOn ? 'On' : 'Off'}
      </span>
      <button onClick={toggleSwitch}>Toggle</button>
      {isOn &&
        (dogImage ? (
          <img className="image" src={dogImage} alt="Chihuahua" />
        ) : (
          <span className="text">Loading...</span>
        ))}
    </div>
  );
}
