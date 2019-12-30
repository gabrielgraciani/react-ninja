import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';

const routes = [
	{path: '/rota1', content: 'rota1'},
	{path: '/rota2', content: 'rota2'}
];

const Main = () => (
	<Fragment>
		<h1>main</h1>
		<Switch>
			{routes.map(route => (
				<Route
					key={route.path}
					path={route.path}
					render={() => <h2>{route.content}</h2>}
				/>
			))}
		</Switch>
	</Fragment>
);

export default Main;