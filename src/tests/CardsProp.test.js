import { render } from '@testing-library/react';
import CardsProp from '../components/CardsProp';



jest.mock('../img/html.png', () => 'htmlImage');
jest.mock('../img/css.png', () => 'cssImage');
jest.mock('../img/js.png', () => 'jsImage');
jest.mock('../img/sass.png', () => 'sassImage');
jest.mock('../img/react.png', () => 'reactImage');
jest.mock('../img/figma.png', () => 'figmaImage');
jest.mock('../img/java.png', () => 'javaImage');
jest.mock('../img/python.png', () => 'pythonImage');

describe('CardsProp Component', () => {

  test('No errors detected', () => {
    render(<CardsProp />);
  });

  test('16 cards', () => {
    const { container } = render(<CardsProp />);
    const cards = container.querySelectorAll('.card');
    expect(cards.length).toBe(16);
  });

});
