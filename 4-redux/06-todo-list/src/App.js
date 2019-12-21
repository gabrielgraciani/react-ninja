import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from './redux-flow/reducers/todos/action-creators'

const App = ({todos, handleAddTodo}) => (
	<div>
		<form onSubmit={handleAddTodo}>
			<input type="text" name="todo" />
			<button type="submit" >Adicionar</button>
		</form>

		<ul>
			<li style={{textDecoration: 'line-through'}}>Item 1</li>
			<li>Item 1</li>
			<li>Item 1</li>
			<li>Item 1</li>
			<li>Item 1</li>
		</ul>

		<div>
			<h3>Mostrar</h3>
			<a href="">Exibir Todos</a> | <a href="">Finalizados</a> | <a href="">A Fazer</a>
		</div>
	</div>
);

const mapStateToProps = (state) => ({
	todos: state
});

const mapDispatchToProps = (dispatch) => ({
	handleAddTodo: (e) => {
		e.preventDefault();
		dispatch(addTodo(e.target.todo.value))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
