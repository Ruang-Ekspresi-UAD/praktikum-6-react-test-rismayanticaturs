import { Counter, Greeting, AlertButton } from './latihan'; // Gunakan './' untuk merujuk ke file di folder yang sama
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

describe('Latihan Tests', () => {
  test('Counter Default Value must be 0', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('count-value');
    expect(countValue).toHaveTextContent('0');
  });

  test('Greeting component displays user name', () => {
    render(<Greeting name="Risma" />);
    const greetingMessage = screen.getByTestId('greeting');
    expect(greetingMessage).toHaveTextContent('Hello, Risma!');
  });

  test('AlertButton triggers alert with correct message', () => {
    window.alert = jest.fn(); // Mock alert
    render(<AlertButton />);
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
    expect(window.alert).toHaveBeenCalledWith('Button clicked!');
  });
});
