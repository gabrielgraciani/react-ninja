import React from 'react';
import {useAuth} from 'hooks';
import pizzaSizes from 'fake-data/pizzas-sizes';
import {Link} from 'react-router-dom';
import {CHOOSE_PIZZA_FLAVOURS} from 'routes';
import HeaderContent from 'ui/header-content';
import PizzaContent from 'ui/pizza-content';
import {singularOrPlural} from 'utils';

const ChoosePizzaSize = () => {
	const {userInfo} = useAuth();

	return(
		<>
			<HeaderContent>
				<div className="texto top bottom">
					<h3>O que vai ser hoje, {userInfo.user.firstName}? =)</h3>
				</div>

				<div className="texto">
					<h4>Escolha o tamanho da pizza</h4>
				</div>
			</HeaderContent>

			<PizzaContent>
					{pizzaSizes.map((pizza) => (
						<Link to={{
							pathname: CHOOSE_PIZZA_FLAVOURS,
							state: pizza
						}} key={pizza.id}>
						<div className="item" >
							<div className="imagem risco">
								<span>{pizza.size}cm</span>
							</div>
							<div className="borda"></div>
							<div className="texto">
								<h5>{pizza.name}</h5>
								<span>{pizza.slices} fatias, {pizza.flavours} {singularOrPlural(pizza.flavours, 'sabor', 'sabores')}</span>
							</div>
						</div>
						</Link>
					))}
			</PizzaContent>
		</>
	)
};

export default ChoosePizzaSize;