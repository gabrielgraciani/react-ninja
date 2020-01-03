import React from 'react';
import {useAuth} from 'hooks';
import {withRouter, Link} from 'react-router-dom';
import {singularOrPlural} from 'utils';

function Footer({buttons, location}){
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
					{buttons.map((button) => (
						<Link key={button.to} to={button.to}>
							<button className={`botao ripple ${button.className}`}>
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