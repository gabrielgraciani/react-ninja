import React, {Suspense, lazy} from 'react';
import Header from '../header';
import {Switch, Route} from 'react-router-dom';

const ChoosePizzaSize = lazy(() => import('pages/choose-pizza-size'));
const ChoosePizzaFlavours = lazy(() => import('pages/choose-pizza-flavours'));

const Main = () => (
		<>
			<Header />

			<div className="main">
				<Suspense fallback="loading...">
					<Switch>
						<Route path="/" exact component={ChoosePizzaSize} />
						<Route path="/sabores-da-pizza" component={ChoosePizzaFlavours} />
					</Switch>
				</Suspense>
			</div>
		</>
);

export default Main;