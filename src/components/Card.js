import React from 'react';

function Card({ item, id, handleClick, isChecking }) {
  const itemClass = item.stat ? `active ${item.stat}` : '';

  const cardStyle = {
    pointerEvents: isChecking ? 'none' : 'auto',
  };

  return (
    <div
      className={`card ${itemClass}`}
      onClick={() => handleClick(id)}
      data-testid={`card-${id}`}
      style={cardStyle}
    >
      <img src={item.img} alt="" />
    </div>
  );
}

export default Card;
