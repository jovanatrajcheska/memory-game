import React, { useState, useEffect } from 'react';
import Card from './Card';

function Cards(props) {

    
    const [items, setItems] = useState([]);
    const [prev, setPrev] = useState(-1);

    useEffect(() => {
        setItems(props.itemImgs.sort(() => Math.random() - 0.5));
    }, [props.itemImgs]);


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
                const resetItems = [...updatedItems];
                resetItems[current].stat = '';
                resetItems[prev].stat = '';
                setItems(resetItems);
                setPrev(-1);
            }, 1000);
        }
    };

    const functionClick = (id) => {
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
                <Card key={index} item={item} id={index} handleClick={functionClick} />
            ))}
        </div>
    );
}

export default Cards;
