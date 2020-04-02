import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import ProdPage from './Components/prodPage';

document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';
ReactDOM.render(<App />, document.getElementById('root'));


