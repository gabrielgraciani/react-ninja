import React, {useState, useEffect} from 'react';
import {useAuth} from 'hooks';
import {Link} from 'react-router-dom';
import {CHOOSE_PIZZA_FLAVOURS} from 'routes';
import HeaderContent from 'ui/header-content';
import PizzaContent from 'ui/pizza-content';
import {singularOrPlural} from 'utils';
import {db} from 'services/firebase';

const ChoosePizzaSize = () => {
	const {userInfo} = useAuth();
	const [pizzasSizes, setPizzasSizes] = useState([]);

	useEffect(() => {
		let sizes = [];
		db.collection('pizzasSizes').get().then(querySnapshot => {
			querySnapshot.forEach(doc => {
				sizes.push({
					id: doc.id,
					...doc.data()
				});
			});

			setPizzasSizes(sizes);
		});
	}, []);

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
					{pizzasSizes.map((pizza) => (
						<Link to={{
							pathname: CHOOSE_PIZZA_FLAVOURS,
							state: {
								pizzaSize: pizza
							}
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