import React from 'react';
import { Provider } from 'react-redux';
import { Home } from './pages/Home';
import store from './store';

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <Provider store={store} >
      <Home />
      <GlobalStyle />
    </Provider>
  );
}

export default App;