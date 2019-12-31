import React, {Fragment, lazy, Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {CssBaseline, LinearProgress} from '@material-ui/core';
import 'assets/css/styles.css';

const MainPage = lazy(() => import('pages/main'));
const Login = lazy(() => import('pages/login'));

const App = () =>(
	<Fragment>
		<CssBaseline />

		<BrowserRouter>
			<Suspense fallback={<LinearProgress />}>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/" component={MainPage} />
				</Switch>
			</Suspense>
		</BrowserRouter>
	</Fragment>
);

export default App;
