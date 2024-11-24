import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Greeting from './greeting';

describe('Greeting Component', () => {
  test('Greeting component displays user name', () => {
    render(<Greeting name="Risma" />);
    const greetingMessage = screen.getByTestId('greeting');
    expect(greetingMessage).toHaveTextContent('Hello, Risma!');
  });

  test('Greeting component displays lecturer name', () => {
    render(<Greeting name="Pak Arif Rahman" />);
    const greetingMessage = screen.getByTestId('greeting');
    expect(greetingMessage).toHaveTextContent('Hello, Pak Arif Rahman!');
  });
});
