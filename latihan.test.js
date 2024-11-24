// latihan.test.js :

import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from '../latihan';
import '@testing-library/jest-dom';
import React from 'react';
import Display from './display';

describe('Latihan Components', () => {

    // ANCHOR 1. Memastikan nilai awal (default) counter adalah 0.
    test('Counter Default Value must be 0', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        expect(countValue).toHaveTextContent('0');
    });

    // ANCHOR  2. Memastikan bahwa nilai counter bertambah +1 setiap kali tombol Increment ditekan.
    test('increment works when button clicked', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        const incrementButton = screen.getByTestId('increment-button');
        fireEvent.click(incrementButton);
        expect(countValue).toHaveTextContent('1');
    });

    // ANCHOR 3. Memastikan bahwa nilai counter berkurang -1 setiap kali tombol Decrement ditekan.
    test('decrement works when button clicked', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        const decrementButton = screen.getByTestId('decrement-button');
        fireEvent.click(decrementButton);
        expect(countValue).toHaveTextContent('-1');
    });
   //ANCHOR - 4. Display has correct value (display.js) 
        test('display has correct value', () => {
          render(<Display value="123" />);
          const displayValue = screen.getByTestId('display-value');
          expect(displayValue).toHaveTextContent('123');
        });


    // ANCHOR Menguji apakah tombol Reset mengatur ulang nilai counter menjadi 0
    test('reset the count using reset button', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        const incrementButton = screen.getByTestId('increment-button');
        const resetButton = screen.getByTestId('reset-button');
        fireEvent.click(incrementButton);
        fireEvent.click(resetButton);
        expect(countValue).toHaveTextContent('0');
    });

    // ANCHOR Memastikan komponen Greeting dapat menerima props dan menampilkan teks ucapan dengan nama Miftahul
    test('greeting component displays "Hello, {Miftahul Rizqha}"', () => {
        render(<Greeting name="Mifta" />);
        const greeting = screen.getByTestId('greeting');
        expect(greeting).toHaveTextContent('Hello, Mifta');
    });

    // ANCHOR memverifikasi teks ucapan untuk nama dosen saya
    test('greeting component displays "Hello, {pak farid}"', () => {
        render(<Greeting name="pak farid" />);
        const greeting = screen.getByTestId('greeting');
        expect(greeting).toHaveTextContent('Hello, pak farid');
    });

    // ANCHOR Memastikan bahwa tombol di komponen AlertButton menampilkan alert dengan pesan yang sesuai ketika diklik.
    test('triggers alert with correct message when clicked', () => {
        window.alert = jest.fn(); // Mock alert function
        render(<AlertButton message="Test alert message" />);
        const alertButton = screen.getByTestId('alert-button');
        fireEvent.click(alertButton);
        expect(window.alert).toHaveBeenCalledWith('Test alert message');
    });
});