import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import reducer from './Store/Reducer';
import { Provider } from "react-redux";
import { loadState, saveState } from './localStorage';
import {throttle} from 'lodash/throttle';

const store = createStore(reducer);
const presistedState = loadState();

store.subscribe(throttle(() => {
  console.log("WE ARE WRITTING TO THE STORE!!!")
  saveState(store.getState());
}, 1000));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
