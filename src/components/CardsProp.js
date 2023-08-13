import React from 'react';
import Cards from '../screens/Cards';
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
    { id: 1, img: htmlImage, stat: '', pairClass: 'pair-1' },
    { id: 2, img: htmlImage, stat: '', pairClass: 'pair-1' },
    { id: 3, img: cssImage, stat: '', pairClass: 'pair-2' },
    { id: 4, img: cssImage, stat: '', pairClass: 'pair-2' }, 
    { id: 5, img: jsImage, stat: '', pairClass: 'pair-3' },
    { id: 6, img: jsImage, stat: '', pairClass: 'pair-3' },
    { id: 7, img: sassImage, stat: '', pairClass: 'pair-4' },
    { id: 8, img: sassImage, stat: '',  pairClass: 'pair-4' },
    { id: 9, img: reactImage, stat: '', pairClass: 'pair-5' },
    { id: 10, img: reactImage, stat: '', pairClass: 'pair-5' },
    { id: 11, img: figmaImage, stat: '', pairClass: 'pair-6' },
    { id: 12, img: figmaImage, stat: '', pairClass: 'pair-6' },
    { id: 13, img: javaImage, stat: '', pairClass: 'pair-7' },
    { id: 14, img: javaImage, stat: '', pairClass: 'pair-7' },
    { id: 15, img: pythonImage, stat: '', pairClass: 'pair-8' },
    { id: 16, img: pythonImage, stat: '' , pairClass: 'pair-8'},
  ];

  return <Cards itemImgs={itemsImg} />;
};

export default CardsProp;
