import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './redux-flow/reducers'

const middleware = ({dispatch, getState}) => (next) => (action) => {
	console.log('MIDDLEWARE::will dispatch: ', action);
	const nextAction = next(action);
	console.log('MIDDLEWARE::next action: ', nextAction);
	return nextAction;
};

const thunk = ({dispatch, getState}) => (next) => (action) => {
	if(typeof action === 'function'){
		return action(dispatch, getState);
	}
	return next(action);
};

const store = createStore(reducer, applyMiddleware(middleware, thunk));

store.dispatch(lazyAction());
function lazyAction(){
	return (dispatch, getState) => {
		dispatch({
			type: 'todos:ADD_TODO',
			payload:{
				text: 'Lazy Action',
				id: '123'
			}
		})
	}
}

const renderState = () => {
	console.log('state: ', store.getState());
}
store.subscribe(renderState)
renderState()

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
