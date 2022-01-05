import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AppContainer from '../redux/containers/AppContainer.js';
import '@testing-library/jest-dom';
import store from '../redux/store/store.js';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  test('renders 404 page when an error is passed in as a prop', async () => {
    render(
      <MemoryRouter initialEntries={['/product/1337']}>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </MemoryRouter>
    )
    await waitFor(() => screen.getByText('Error 404'));
    expect(screen.getByText('Error 404')).toBeInTheDocument();
  });
  test('when handleProductInit is triggered in a related product, the current product will be the previously related product', () => {
  });
});