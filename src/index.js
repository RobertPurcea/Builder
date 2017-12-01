import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// FIXME: put addIngredient and removeIngredient in the same function. 99% of the code is repeated between the 2
// TODO: add a flexible global component that you use, like a button. There are inevitable
// in React, and yet there is no structure for them currently. Add some global components and use them