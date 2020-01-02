import React, {useState} from 'react';
import HeaderContent from 'ui/header-content';
import SingularOrPlural from 'utils';
import {Redirect} from 'react-router-dom';
import {HOME} from 'routes';
import pizzasFlavours from 'fake-data/pizzas-flavours';
import {Grid, Paper, Divider} from '@material-ui/core';
import {Link} from 'react-router-dom';


const ChoosePizzaFlavours = ({location}) => {
	const [checkboxes, setCheckboxes] = useState(() => ({}));
	console.log('checkboxes', checkboxes);
	if(!location.state){
		return <Redirect to={HOME} />
	}
	const {flavours, id} = location.state;
	const handleChangeCheckbox = (pizzaId) => (e) => {
		setCheckboxes((checkboxes) => {
			return{
				...checkboxes,
				[pizzaId]: !checkboxes[pizzaId]
			}
		});
	};

	return(
		<>
			<HeaderContent>
				<div className="texto top">
					<h4>Escolha até {flavours} {SingularOrPlural(flavours, 'sabor', 'sabores')}:</h4>
				</div>
			</HeaderContent>

			<Grid container spacing={3} className="container-pizza">
				{pizzasFlavours.map((pizza) => (
					<Grid item key={pizza.id} xs>
						<Paper className="full">
							<label>
								<input type="checkbox"
									   value=""
									   checked={!!checkboxes[pizza.id]}
									   onChange={handleChangeCheckbox(pizza.id)} />
								<div className="pizza-imagem icon">
									<img src={pizza.image} alt={pizza.name} />
								</div>

								<Divider className="divider" />

								<div className="texto">
									<h5>{pizza.name}</h5>
								</div>

								<div className="texto">
									<span>{pizza.value[id]}</span>
								</div>
							</label>
						</Paper>
					</Grid>
				))}
			</Grid>
		</>
	)
};

export default ChoosePizzaFlavours;