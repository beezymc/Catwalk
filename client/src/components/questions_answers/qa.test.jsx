import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import QAWrapper from './QAWrapper.jsx';
import QAList from './List.jsx';
import QAListEntry from './QAListEntry.jsx';
import QuestionItem from './QuestionItem.jsx';
import AnswersList from './AnswersList.jsx';



describe('QAWrapper', () => {
    test('renders QAWrapper component', () => {
      render(<QAWrapper />)
    });
  });
  

describe('QAList', () => {
  test('renders QAList component', () => {
    render(<QAList />)
  });
});

// describe('QAListEntry', () => {
//   test('renders QAListEntry component', () => {
//     render(<QAListEntry />)
//   });
// });
