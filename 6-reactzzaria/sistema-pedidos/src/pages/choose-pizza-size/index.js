import React, {useContext} from 'react';
import {AuthContext} from 'contexts/auth';
import {Grid, Paper, Divider} from '@material-ui/core';
import pizzaSizes from 'fake-data/pizzas-sizes';
import {Link} from 'react-router-dom';
import {CHOOSE_PIZZA_FLAVOURS} from 'routes';
import HeaderContent from 'ui/header-content';
import SingularOrPlural from 'utils';

const ChoosePizzaSize = () => {
	const {userInfo} = useContext(AuthContext);

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

			<Grid container spacing={3} className="container-pizza">
				{pizzaSizes.map((pizza) => (
					<Grid item key={pizza.id} xs>
						<Link to={{
							pathname: CHOOSE_PIZZA_FLAVOURS,
							state: pizza
						}} className="paper-pizza">
							<Paper className="full">
								<div className="pizza-imagem">
									<span>
										{pizza.size}cm
									</span>
								</div>

								<Divider className="divider" />

								<div className="texto">
									<h5>{pizza.name}</h5>
								</div>

								<div className="texto">
									<span>{pizza.slices} fatias, {pizza.flavours} {SingularOrPlural(pizza.flavours, 'sabor', 'sabores')}</span>
								</div>
							</Paper>
						</Link>
					</Grid>
				))}
			</Grid>
		</>
	)
};






export default ChoosePizzaSize;