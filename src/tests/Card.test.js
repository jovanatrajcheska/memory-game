import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from '../components/Card';

describe('Card Component', () => {

  const item = { id: 7, img: '/img/java.png', stat: '' };
  const id = 0;
  const handleClick = jest.fn();

  test('without errors', () => {
    render(<Card item={item} id={id} handleClick={handleClick} />);
  });

  test('when clicked', () => {
    const { container } = render(<Card item={item} id={id} handleClick={handleClick} />);
    fireEvent.click(container.firstChild);
    expect(handleClick).toHaveBeenCalledWith(id);
  });

  test('card image', () => {
    const { getByAltText } = render(<Card item={item} id={id} handleClick={handleClick} />);
    const imgElem = getByAltText('');
    expect(imgElem).toBeInTheDocument();
    expect(imgElem.src).toContain(item.img);
  });
});