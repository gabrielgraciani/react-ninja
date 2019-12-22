
import * as actions from './actions';

export const addTodo = (text) => ({
	type: actions.ADD_TODO,
	payload: {id: new Date().getTime(), text}
});

export const toggleTodo = (id) => ({
	type: actions.TOGGLE_TODO,
	payload: {id}
})