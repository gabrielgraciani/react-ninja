import React, {useState} from 'react';
import HeaderContent from 'ui/header-content';
import Footer from 'ui/footer';
import {HOME, CHOOSE_PIZZA_FLAVOURS, CHECKOUT} from 'routes';
import {Redirect} from 'react-router-dom';

function ChoosePizzaQuantity({location}) {
	const [quantity, setQuantity] = useState(1);
	function handleChange(e){
		const {value} = e.target;
		if(value >=1){
			setQuantity(e.target.value);
		}
	}

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
						<input type="number" value={quantity} onChange={handleChange} autoFocus />
					</div>

					<div className="texto">
						<button className="botao ripple rosa">Adicionar e montar outra</button>
					</div>
				</div>
			</div>

			<Footer buttons={{
				back:{
					to: CHOOSE_PIZZA_FLAVOURS,
					children: 'Mudar sabores'
				},
				action:{
					to: CHECKOUT,
					children: 'Finalizar Compra',
				}
			}} />
		</>
	)
}

export default ChoosePizzaQuantity;