import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'


import Index from './components/Index';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Index></Index>
    </Router>
  </Provider>,
  document.getElementById('root')
);

