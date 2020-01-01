import React, {useContext} from 'react';
import {AuthContext} from 'contexts/auth';
import {Grid, Paper, Divider} from '@material-ui/core';
import pizzaSizes from 'fake-data/pizzas-sizes';


const ChoosePizzaSize = () => {
	const {userInfo} = useContext(AuthContext);

	return(
		<>
			<Grid container direction="column" alignItems="center">
				<div className="texto top bottom">
					<h3>O que vai ser hoje, {userInfo.user.firstName}? =)</h3>
				</div>

				<div className="texto">
					<h4>Escolha o tamanho da pizza</h4>
				</div>
			</Grid>

			<Grid container spacing={3} className="container-pizza">
				{pizzaSizes.map((pizza) => (
					<Grid item key={pizza.id} xs>
						<Paper className="paper-pizza">
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
								<span>{pizza.slices} fatias, {pizza.flavours} {singularOrPlural(pizza.flavours, 'sabor', 'sabores')}</span>
							</div>
						</Paper>
					</Grid>
				))}
			</Grid>
		</>
	)
};


function singularOrPlural(amount, singular, plural){
	return amount === 1 ? singular : plural;
}



export default ChoosePizzaSize;