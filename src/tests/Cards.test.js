import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Cards from '../components/Cards';


describe('Cards Component', () => {


    // checking if there are 16 cards
    test('16 cards', () => {
        const { container } = render(<Cards />);
        const cards = container.querySelectorAll('.card');
        expect(cards.length).toBe(16);
    });


    // active card 
    test('checks if clicked card has class active', () => {
        const { container } = render(<Cards />);
        const cards = container.querySelectorAll('.card');

        fireEvent.click(cards[7]);
        expect(cards[7]).toHaveClass('active');
    })

    // is not active
    test('check if another card is not active', () =>{
        const { container } = render(<Cards/>)
        const cards = container.querySelectorAll('.card')
        

        // click on card 
        fireEvent.click(cards[3]);
        expect(cards[3]).toHaveClass('active');


        // check if all other cards are not active
        for(let i = 0; i < cards.length; i++){
                if(i != 3){
                    expect(cards[i]).not.toHaveClass('active');
                }
        }
        

    })
});