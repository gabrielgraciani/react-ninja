import React, {Suspense, lazy} from 'react';
import Header from '../header';
import {Switch, Route} from 'react-router-dom';
import * as routes from 'routes';

const ChoosePizzaSize = lazy(() => import('pages/choose-pizza-size'));
const ChoosePizzaFlavours = lazy(() => import('pages/choose-pizza-flavours'));
const ChoosePizzaQuantity = lazy(() => import('pages/choose-pizza-quantity'));
const Checkout = lazy(() => import('pages/checkout'));

const Main = () => (
		<>
			<Header />

			<div className="main">
				<Suspense fallback="loading...">
					<Switch>
						<Route path={routes.HOME} exact component={ChoosePizzaSize} />
						<Route path={routes.CHOOSE_PIZZA_FLAVOURS} component={ChoosePizzaFlavours} />
						<Route path={routes.CHOOSE_PIZZA_QUANTITY} component={ChoosePizzaQuantity} />
						<Route path={routes.CHECKOUT} component={Checkout} />
					</Switch>
				</Suspense>
			</div>
		</>
);

export default Main;