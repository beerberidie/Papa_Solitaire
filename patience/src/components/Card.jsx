import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.css';

const Card = ({
  suit,
  value,
  faceUp,
  position,
  draggable,
  onClick,
  onDragStart,
  onDragEnd,
  cardBackColor = 'blue'
}) => {
  // Card colors: hearts and diamonds are red, clubs and spades are black
  const color = (suit === 'hearts' || suit === 'diamonds') ? 'red' : 'black';

  // Handle drag start
  const handleDragStart = (e) => {
    if (draggable && faceUp) {
      onDragStart && onDragStart(e);
    } else {
      e.preventDefault();
    }
  };

  // Handle click
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <div
      className={`card ${faceUp ? 'face-up' : 'face-down'} ${color}`}
      data-suit={suit}
      data-value={value}
      style={{
        position: position ? 'absolute' : 'relative',
        top: position ? `${position.y}px` : 'auto',
        left: position ? `${position.x}px` : 'auto',
        zIndex: position ? position.z : 'auto'
      }}
      draggable={draggable && faceUp}
      onDragStart={handleDragStart}
      onDragEnd={onDragEnd}
      onClick={handleClick}
    >
      {faceUp ? (
        <>
          <div className="card-corner top-left">
            <div className="card-value">{value}</div>
            <div className="card-suit">{getSuitSymbol(suit)}</div>
          </div>
          <div className="card-center">{getSuitSymbol(suit)}</div>
          <div className="card-corner bottom-right">
            <div className="card-value">{value}</div>
            <div className="card-suit">{getSuitSymbol(suit)}</div>
          </div>
        </>
      ) : (
        <div className={`card-back ${cardBackColor}`}></div>
      )}
    </div>
  );
};

// Helper function to get suit symbol
const getSuitSymbol = (suit) => {
  switch (suit) {
    case 'hearts': return '♥';
    case 'diamonds': return '♦';
    case 'clubs': return '♣';
    case 'spades': return '♠';
    default: return '';
  }
};

Card.propTypes = {
  suit: PropTypes.oneOf(['hearts', 'diamonds', 'clubs', 'spades']).isRequired,
  value: PropTypes.oneOf(['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']).isRequired,
  faceUp: PropTypes.bool,
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    z: PropTypes.number
  }),
  draggable: PropTypes.bool,
  onClick: PropTypes.func,
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func,
  cardBackColor: PropTypes.oneOf(['blue', 'red', 'green', 'gold'])
};

Card.defaultProps = {
  faceUp: false,
  draggable: false,
  position: null
};

export default Card;
