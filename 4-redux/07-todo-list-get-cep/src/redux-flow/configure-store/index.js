import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../../redux-flow/reducers';
import thunk from 'redux-thunk';

export default ({initialState} = {}) => {
	const store = createStore(rootReducer, initialState, applyMiddleware(middleware, thunk));
	return store;
}

const middleware = ({dispatch, getState}) => (next) => (action) => {
	console.group(`MIDDLEWARE->${action.type}`);
	console.log('will dispatch: ', action);
	console.log('state: ', getState());
	const nextAction = next(action);
	console.log('next state: ', getState());
	console.groupEnd(`MIDDLEWARE->${action.type}`);
	return nextAction;
};