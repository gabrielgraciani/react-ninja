import React from 'react';

const App = () => (
	<div>
		<input type="text" />

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

export default App;
