import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import StartOver from '../components/StartOver'; // Import the new component

function Cards(props) {
  const [items, setItems] = useState([]);
  const [prev, setPrev] = useState(null);
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    const shuffledItems = [...props.itemImgs].sort(() => Math.random() - 0.5);
    setItems(shuffledItems);
  }, [props.itemImgs]);

  const check = (current) => {
    setIsChecking(true);

    if (items[current].pairClass === items[prev].pairClass) {
      const updatedItems = [...items];
      updatedItems[current].stat = 'correct';
      updatedItems[prev].stat = 'correct';
      setItems(updatedItems);
      setPrev(null);

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
        setPrev(null);
        setIsChecking(false);
      }, 1000);
    }
  };

  const functionClick = (id) => {
    if (
      !isChecking &&
      (prev === null || prev !== id) &&
      items[id].stat !== 'correct'
    ) {
      if (prev === null) {
        const updatedItems = [...items];
        updatedItems[id].stat = 'active';
        setItems(updatedItems);
        setPrev(id);
      } else {
        check(id);
      }
    }
  };

  const handleRestart = () => {
    window.location.reload(); // Refresh the page to start over
  };

  return (
    <div>
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
      <StartOver onRestart={handleRestart} />
    </div>
  );
}

export default Cards;
