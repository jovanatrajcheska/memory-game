import React, { useState, useEffect } from 'react';
import Card from './Card';

function Cards(props) {
  const [items, setItems] = useState([]);
  const [prev, setPrev] = useState(-1);
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    if (Array.isArray(props.itemImgs)) {
      const shuffledItems = [...props.itemImgs].sort(() => Math.random() - 0.5);
      setItems(shuffledItems);
    }
  }, [props.itemImgs]);

  const check = (current) => {
    setIsChecking(true);

    if (items[current].id === items[prev].id) {
      const updatedItems = [...items];
      updatedItems[current].stat = 'correct';
      updatedItems[prev].stat = 'correct';
      setItems(updatedItems);
      setPrev(-1);

      // Allow further clicks immediately after a correct match
      setIsChecking(false);
    } else {
      const updatedItems = [...items];
      updatedItems[current].stat = 'wrong';
      updatedItems[prev].stat = 'wrong';
      setItems(updatedItems);

      setTimeout(() => {
        const resetItems = [...updatedItems];
        resetItems[current].stat = '';
        resetItems[prev].stat = '';
        setItems(resetItems);
        setPrev(-1);
        setIsChecking(false);
      }, 1000);
    }
  };

  const functionClick = (id) => {
    if (!isChecking && prev !== id && items[id].stat !== 'correct') {
      if (prev === -1) {
        const updatedItems = [...items];
        updatedItems[id].stat = 'active';
        setItems(updatedItems);
        setPrev(id);
      } else {
        check(id);
      }
    }
  };

  return (
    <div className="container" data-testid="cards-container">
      {items.map((item, index) => (
        <Card
          key={index}
          item={item}
          id={index}
          handleClick={functionClick}
          isChecking={isChecking}
        />
      ))}
    </div>
  );
}

export default Cards;
