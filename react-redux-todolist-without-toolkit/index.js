import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // * React로 만든 component를 provider안에 넣으면 provider를 통해 redux store에 접근 가능해진다
  document.getElementById('root')
);
