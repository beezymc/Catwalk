import React from 'react';
import { render, screen } from '@testing-library/react'
import QAWrapper from './QAWrapper.jsx';
import '@testing-library/jest-dom';


describe('QAWrapper', () => {
    test('renders QAWrapper component', () => {
      render(<QAWrapper />)
    });
  });
  
  
//   describe('QAWrapper', () => {
//     test('renders QAWrapper component', () => {
//       render(<QAWrapper />);
  
//       expect(screen.getByText('Hello from QA Wrapper')).toBeInTheDocument();
//     });
//   });