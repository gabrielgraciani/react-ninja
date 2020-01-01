import React, {Suspense, lazy} from 'react';
import Header from '../header';
import {Switch, Route} from 'react-router-dom';
import {HOME, CHOOSE_PIZZA_FLAVOURS} from 'routes';

const ChoosePizzaSize = lazy(() => import('pages/choose-pizza-size'));
const ChoosePizzaFlavours = lazy(() => import('pages/choose-pizza-flavours'));

const Main = () => (
		<>
			<Header />

			<div className="main">
				<Suspense fallback="loading...">
					<Switch>
						<Route path={HOME} exact component={ChoosePizzaSize} />
						<Route path={CHOOSE_PIZZA_FLAVOURS} component={ChoosePizzaFlavours} />
					</Switch>
				</Suspense>
			</div>
		</>
);

export default Main;