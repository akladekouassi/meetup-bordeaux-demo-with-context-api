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

reportWebVitals();
