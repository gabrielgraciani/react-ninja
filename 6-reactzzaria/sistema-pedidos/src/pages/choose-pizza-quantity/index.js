import React from 'react';
import HeaderContent from 'ui/header-content';
import Footer from 'ui/footer';
import {HOME, CHOOSE_PIZZA_FLAVOURS} from 'routes';
import {Redirect} from 'react-router-dom';

function ChoosePizzaQuantity({location}) {
	if(!location.state){
		return <Redirect to={HOME} />
	}

	return(
		<>
			<HeaderContent>
				<div className="texto top">
					<h4>Quantas pizzas você gostaria <br />
						de pedir, com esses sabores?</h4>
				</div>
			</HeaderContent>

			<div id="wrap_quantidade">
				<div className="indent">
					<div className="input">
						<input type="number" autoFocus />
					</div>
				</div>
			</div>

			<Footer buttons={{
				back:{
					to: CHOOSE_PIZZA_FLAVOURS,
					children: 'Mudar sabores'
				},
				action:{
					to: '/',
					children: 'Finalizar Compra',
				}
			}} />
		</>
	)
}

export default ChoosePizzaQuantity;