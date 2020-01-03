import React, {useState} from 'react';
import HeaderContent from 'ui/header-content';
import PizzaContent from 'ui/pizza-content';
import {singularOrPlural, toMoney} from 'utils';
import {Redirect, Link} from 'react-router-dom';
import {HOME, CHOOSE_PIZZA_QUANTITY} from 'routes';
import pizzasFlavours from 'fake-data/pizzas-flavours';
import {useAuth} from 'hooks';

const ChoosePizzaFlavours = ({ location }) => {
	const [checkboxes, setCheckboxes] = useState(() => ({}));
	const {userInfo} = useAuth();

	if (!location.state) {
		return <Redirect to={HOME} />
	}

	const { flavours, id, name, slices } = location.state;

	const handleChangeCheckbox = (pizzaId) => (e) => {
		console.log('checkboxes', checkboxes);
		if (
			checkboxesChecked(checkboxes).length === flavours &&
			e.target.checked === true
		) {
			return
		}

		setCheckboxes((checkboxes) => {
			return {
				...checkboxes,
				[pizzaId]: !checkboxes[pizzaId]
			}
		})
	};

	return(
		<>
			<HeaderContent>
				<div className="texto top">
					<h4>Escolha até {flavours} {singularOrPlural(flavours, 'sabor', 'sabores')}:</h4>
				</div>
			</HeaderContent>

			<PizzaContent>
					{pizzasFlavours.map((pizza) => (
						<label key={pizza.id}>
							<div className={`item ${checkboxes[pizza.id] ? "active" : ""}`} >
								<input type="checkbox"
									   value=""
									   checked={!!checkboxes[pizza.id]}
									   onChange={handleChangeCheckbox(pizza.id)} />

								<div className="imagem">
									<img src={pizza.image} alt={pizza.name} />
								</div>

								<div className="borda"></div>

								<div className="texto">
									<h5>{pizza.name}</h5>
									<span>{toMoney(pizza.value[id])}</span>
								</div>
							</div>
						</label>
					))}
			</PizzaContent>

			<div id="wrap_footer">
				<div className="indent">
					<div className="texto">
						<span><b>{userInfo.user.firstName}, seu pedido é:</b></span>
						<span>Pizza <b>{name.toUpperCase()} </b>
							({slices} {singularOrPlural(slices, 'fatia', 'fatias')}, {flavours} {singularOrPlural(flavours, 'sabor', 'sabores')})</span>
					</div>

					<div className="botoes">
						<Link to={HOME}>
							<button className="botao ripple">Mudar Tamanho</button>
						</Link>
						<Link to={CHOOSE_PIZZA_QUANTITY}>
							<button className="botao ripple azul botao2">Quantas pizzas</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
};

function checkboxesChecked (checkboxes) {
	return Object.values(checkboxes).filter(Boolean)
}

export default ChoosePizzaFlavours;