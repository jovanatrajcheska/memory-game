import React, { useState } from 'react';
import Card from './Card';
import htmlImage from './img/html.png';
import cssImage from './img/css.png';
import jsImage from './img/js.png';
import sassImage from './img/sass.png';
import reactImage from './img/react.png';
import figmaImage from './img/figma.png';
import javaImage from './img/java.png';
import pythonImage from './img/python.png';

function Cards() {

    const randomImg = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };
  const [items, setItems] = useState(() => {
    const initialItems = [
      { id: 1, img: htmlImage, stat: '' },
      { id: 1, img: htmlImage, stat: '' },
      { id: 2, img: cssImage, stat: '' },
      { id: 2, img: cssImage, stat: '' },
      { id: 3, img: jsImage, stat: '' },
      { id: 3, img: jsImage, stat: '' },
      { id: 4, img: sassImage, stat: '' },
      { id: 4, img: sassImage, stat: '' },
      { id: 5, img: reactImage, stat: '' },
      { id: 5, img: reactImage, stat: '' },
      { id: 6, img: figmaImage, stat: '' },
      { id: 6, img: figmaImage, stat: '' },
      { id: 7, img: javaImage, stat: '' },
      { id: 7, img: javaImage, stat: '' },
      { id: 8, img: pythonImage, stat: '' },
      { id: 8, img: pythonImage, stat: '' },
    ];

    return randomImg(initialItems);
  });

  const [prev, setPrev] = useState(-1);



  const check = (current) => {
    if (items[current].id === items[prev].id) {
      const updatedItems = [...items];
      updatedItems[current].stat = 'correct';
      updatedItems[prev].stat = 'correct';
      setItems(updatedItems);
      setPrev(-1);
    } else {
      const updatedItems = [...items];
      updatedItems[current].stat = 'wrong';
      updatedItems[prev].stat = 'wrong';
      setItems(updatedItems);

      setTimeout(() => {
        const resetItems = [...items];
        resetItems[current].stat = '';
        resetItems[prev].stat = '';
        setItems(resetItems);
        setPrev(-1);
      }, 1000);
    }
  };

  const handleClick = (id) => {
    if (prev === -1) {
      const updatedItems = [...items];
      updatedItems[id].stat = 'active';
      setItems(updatedItems);
      setPrev(id);
    } else {
      check(id);
    }
  };

  return (
    <div className="container">
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default Cards;