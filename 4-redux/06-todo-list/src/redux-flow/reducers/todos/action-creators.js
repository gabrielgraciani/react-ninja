
import {ADD_TODO} from './actions';

export const addTodo = (text) => ({
	type: ADD_TODO,
	payload: {id: new Date().getTime(), text}
})