import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';

ReactDOM.render(<App />, document.getElementById('root'));
