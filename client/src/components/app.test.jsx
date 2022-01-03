import React from 'react';
import { render, screen } from '@testing-library/react';
import AppContainer from '../redux/containers/AppContainer.js';
import '@testing-library/jest-dom';
import store from '../redux/store/store.js';
import { Provider } from 'react-redux';
import {BrowserRouter, MemoryRouter} from 'react-router-dom';
import {createMemoryHistory} from 'history';


const renderWithRouter = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, {wrapper: BrowserRouter});
};

describe('App', () => {
  test('renders 404 page when an error is passed in as a prop', async () => {
    //This product doesn't exist--should cause an error.
    const route = '/product/60600';
    renderWithRouter(
      <Provider store={store}>
        <AppContainer />
      </Provider>, {route});
    await expect(screen.findByText('Error 404').toBeInTheDocument);
  });
});