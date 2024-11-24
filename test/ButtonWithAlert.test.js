import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonWithAlert from './ButtonWithAlert';

describe('ButtonWithAlert Component', () => {
  test('Triggers alert with correct message when clicked', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<ButtonWithAlert />);
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
    expect(alertMock).toHaveBeenCalledWith('Button clicked!');
    alertMock.mockRestore();
  });
});
