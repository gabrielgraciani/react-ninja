import React, {useState, useEffect} from 'react';
import HeaderContent from 'ui/header-content';
import PizzaContent from 'ui/pizza-content';
import {singularOrPlural, toMoney} from 'utils';
import {Redirect,} from 'react-router-dom';
import {HOME, CHOOSE_PIZZA_QUANTITY} from 'routes';
import Footer from 'ui/footer';
import {db} from 'services/firebase';

const ChoosePizzaFlavours = ({ location }) => {
	const [checkboxes, setCheckboxes] = useState(() => ({}));
	const [pizzasFlavours, setPizzasFlavours] = useState([]);

	useEffect(() => {
		let mounted = true;
		db.collection('pizzasFlavours').get().then(querySnapshot => {
			let flavours = [];
			querySnapshot.forEach(doc => {
				flavours.push({
					id: doc.id,
					...doc.data()
				});
			});
			if(mounted){
				setPizzasFlavours(flavours);
			}
		});

		return () => {
			mounted = false
		}
	}, []);

	if (!location.state) {
		return <Redirect to={HOME} />
	}

	const {flavours, id} = location.state.pizzaSize;

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

			<Footer buttons={{
				back:{
					to: HOME,
					children:'Mudar Tamanho'
				},
				action: {
					to: {
					pathname: CHOOSE_PIZZA_QUANTITY,
					state: {
					...location.state,
					pizzaFlavours: getFlavoursNameAndId({checkboxes, pizzasFlavours})
				}
				},
					children: 'Quantas pizzas?',
					disabled: checkboxesChecked(checkboxes).length === 0
				}
			}} />
		</>
	)
};

function checkboxesChecked (checkboxes) {
	return Object.values(checkboxes).filter(Boolean)
}

function getFlavoursNameAndId({checkboxes, pizzasFlavours}){
	return Object.entries(checkboxes).filter(([, value]) => !!value)
		.map(([id]) => ({
			id,
			name: pizzasFlavours.find((flavour) => flavour.id === id).name
		})
	);
}

export default ChoosePizzaFlavours;