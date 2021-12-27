import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store.js';
import AppContainer from './redux/containers/AppContainer.js';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path={'/product/:productId'} element={
        <Provider store={store}>
          <AppContainer />
        </Provider>
      }>
      </Route>
    </Routes>
  </BrowserRouter>
  , document.getElementById('app'));