import React from 'react';
import { render, screen } from '@testing-library/react'
import App from './index.jsx';
import '@testing-library/jest-dom'


describe('App', () => {
  test('renders App component', () => {
    render(<App />)
  });
});


describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    expect(screen.getByText('Project Catwalk')).toBeInTheDocument();
  });
});
