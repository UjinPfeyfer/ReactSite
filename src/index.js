import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<button>123</button>, document.getElementById('calc'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
