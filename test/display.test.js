import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Display from './display';

describe('Display Component', () => {
  test('Display has correct value', () => {
    render(<Display value="Displayed Value" />);
    const displayValue = screen.getByTestId('display-value');
    expect(displayValue).toHaveTextContent('Displayed Value');
  });
});
