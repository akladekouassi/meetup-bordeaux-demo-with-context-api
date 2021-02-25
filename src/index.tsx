import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContextLikeReduxProfider from './ContextLikeRedux/contextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ContextLikeReduxProfider>
      <App />
    </ContextLikeReduxProfider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
