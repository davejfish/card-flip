import './card.css';

import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';

export default function Card() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(prevState => (!prevState));
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
      <div className='card'>
        <span>
          test card front
        </span>
        <img src={`${process.env.PUBLIC_URL}/fox.png`}></img>
        <button onClick={(e) => handleClick(e) }>
          flip
        </button>
      </div>

      <div className='card'>
        <span>
          test card back
        </span>
        <img src={`${process.env.PUBLIC_URL}/gori.png`}></img>
        <button onClick={(e) => handleClick(e) }>
          flip
        </button>
      </div>
    </ReactCardFlip>
  );
}
