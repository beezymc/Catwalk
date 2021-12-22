import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './index.jsx';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
  });
});