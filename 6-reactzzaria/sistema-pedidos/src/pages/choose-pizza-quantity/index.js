import React from 'react';
import HeaderContent from 'ui/header-content';
import Footer from 'ui/footer';
import {CHOOSE_PIZZA_FLAVOURS} from 'routes';

function ChoosePizzaQuantity() {
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
						<input type="number" value="1" autoFocus />
					</div>
				</div>
			</div>

			<Footer buttons={[
				{
					to: CHOOSE_PIZZA_FLAVOURS,
					children: 'Mudar sabores'
				},
				{
					to: '/',
					children: 'Finalizar Compra',
					classname: 'azul botao2'
				}
			]} />
		</>
	)
}

export default ChoosePizzaQuantity;