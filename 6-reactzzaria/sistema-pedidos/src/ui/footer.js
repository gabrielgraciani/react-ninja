import React from 'react';
import {useAuth} from 'hooks';
import {withRouter, Link} from 'react-router-dom';
import {singularOrPlural} from 'utils';

function Footer({buttons, location}){
	const {userInfo} = useAuth();
	const {pizzaSize, pizzaFlavours} = location.state;
	const {name, slices, flavours} = pizzaSize;
	console.log(pizzaFlavours);
	return(
		<div id="wrap_footer">
			<div className="indent">
				<div className="texto">
					<span><b>{userInfo.user.firstName}, seu pedido é:</b></span>
					<span>Pizza <b>{name.toUpperCase()} </b>
							({slices} {singularOrPlural(slices, 'fatia', 'fatias')}, {flavours} {singularOrPlural(flavours, 'sabor', 'sabores')})</span>

					{pizzaFlavours && (
						<span>{singularOrPlural(pizzaFlavours.length, 'no sabor', 'nos sabores')} <b>{pizzaFlavours.map(({name}) => name).join(', ')}</b></span>
					)}
				</div>

				<div className="botoes">
					{buttons.map((button) => (
						<Link key={button.to} to={button.to}>
							<button className={`botao ripple ${button.classname}`}>
								{button.children}
							</button>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default withRouter(Footer);