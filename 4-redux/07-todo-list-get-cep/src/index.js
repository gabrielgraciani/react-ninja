import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './redux-flow/reducers'

const middleware = ({dispatch, getState}) => (next) => (action) => {
	const nextAction = next(action);
	return nextAction;
};



const store = createStore(reducer, applyMiddleware(middleware));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
