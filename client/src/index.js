import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {clickEffect} from 'tools'; 

ReactDOM.render(<App />, document.getElementById('root'));

// Animation to appear on every click
document.addEventListener('click', clickEffect);

