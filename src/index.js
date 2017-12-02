import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// FIXME: put addIngredient and removeIngredient in the same function. 99% of the code is repeated between the 2
// FIXME: make BurgerBuilder leaner. Tip: set the state as prop, instead of passing each of it's keys separately
// FIXME: the same as the first point for openPurchaseMode and closePurchaseMode

/**
 * <Modal>
 * 	<ModalContent />
 * 	<Backdrop /> (if I need it)
 * </Modal>
 */