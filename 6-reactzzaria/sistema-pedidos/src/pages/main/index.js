import React, {Suspense, lazy} from 'react';
import Header from '../header';
import {Switch, Route} from 'react-router-dom';

const ChoosePizzaSize = lazy(() => import('pages/choose-pizza-size'));

const Main = () => (
		<>
			<Header />

			<div className="main">
				<Suspense fallback="loading...">
					<Switch>
						<Route path="/" exact component={ChoosePizzaSize} />
					</Switch>
				</Suspense>
			</div>
		</>
);


export default Main;