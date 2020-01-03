import React from 'react';
import {useAuth} from 'hooks';
import {withRouter, Link} from 'react-router-dom';
import {singularOrPlural} from 'utils';

function Footer({buttons, location, history}){
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
					<Link to={buttons.back.to} onClick={(e) => {
						e.preventDefault();
						history.goBack();
					}}>
						<button className="botao ripple">
							{buttons.back.children}
						</button>
					</Link>

					<Link to={buttons.action.to}>
						<button className="botao ripple azul botao2">
							{console.log('botoes', buttons)}
							{buttons.action.children}
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default withRouter(Footer);