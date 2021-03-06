import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './_globalStyle';

import Routes from './routes';
import store from './store';

export default () => (
  <Provider store={store}>
    <GlobalStyle />
    <Routes />
  </Provider>
);

// listen to store changes
// store.subscribe(() => {
//   console.log(store.getState());
// });
