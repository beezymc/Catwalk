import React from 'react';
import { render, screen } from '@testing-library/react';
import AppContainer from '../redux/containers/AppContainer.js';
import '@testing-library/jest-dom';
import store from '../redux/store/store.js';
import { Provider } from 'react-redux';

describe('App', () => {
  test('renders App component', () => {
    render(
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  });
});


// describe('App', () => {
//   test('renders App component', () => {
//     render(<AppContainer />);
//     expect(screen.getByText('Project Catwalk')).toBeInTheDocument();
//   });
// });
