import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';

// we add this libraries to connect
import { Provider } from 'react-redux'
import store from './redux/store'

const rootElement = document.getElementById('root');
ReactDOM.render(
  // we add <Provider with the respective store
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  rootElement);
