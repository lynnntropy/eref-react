import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import axios from 'axios'
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:5000/api'
} else {
  axios.defaults.baseURL = '/api'
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
