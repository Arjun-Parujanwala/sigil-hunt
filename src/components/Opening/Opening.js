import React, {useState} from 'react';
import './Opening.css';

export default function Opening() {
    const [isAnimated, setIsAnimated] = useState(false);

    const handleCLick = () => {
        setIsAnimated(true);
    }

  return (
    <div className="Opening" onClick={handleCLick}>
        <div className={`left ${isAnimated? 'goLeft' : ''}`} />
        <div className={`right ${isAnimated? 'goRight' : ''}`} />
    </div>
  );
}