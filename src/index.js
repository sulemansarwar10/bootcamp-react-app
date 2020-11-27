import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Counter from './counter';


ReactDOM.render(
  <React.StrictMode>
    <App name="suleman sarwar" />
    <App name="suleman sarwar" />
    <Counter count="1"/>
  </React.StrictMode>,
  document.getElementById('root')
);

