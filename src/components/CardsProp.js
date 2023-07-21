import React from 'react';
import Cards from './Cards';
import htmlImage from '../img/html.png';
import cssImage from '../img/css.png';
import jsImage from '../img/js.png';
import sassImage from '../img/sass.png';
import reactImage from '../img/react.png';
import figmaImage from '../img/figma.png';
import javaImage from '../img/java.png';
import pythonImage from '../img/python.png';

const CardsProp = () => {
  const itemsImg = [
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

  return <Cards itemImgs={itemsImg} />;
};

export default CardsProp;
