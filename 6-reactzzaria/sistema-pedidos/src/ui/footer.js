import React from 'react';
import {useAuth} from 'hooks';
import {withRouter, Link} from 'react-router-dom';
import {singularOrPlural} from 'utils';
import {HOME, CHOOSE_PIZZA_QUANTITY} from 'routes';

function Footer({location}){
	const {userInfo} = useAuth();
	const {name, slices, flavours} = location.state;
	return(
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
	)
}

export default withRouter(Footer);