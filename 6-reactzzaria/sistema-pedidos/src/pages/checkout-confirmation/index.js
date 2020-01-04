import React from 'react';
import {useAuth} from 'hooks';
import OrderInfo from 'ui/order-info';

function CheckoutConfirmation(){
	const {userInfo} = useAuth();
	return(
		<div id="wrap_checkout" className="confirmation">
			<div className="indent">
				<div className="texto">
					<h4>Oi {userInfo.user.firstName}</h4>
					<span>Confere, por favor, se está tudo certo com o seu pedido antes de finalizar?</span>
				</div>

				<div className="conteudo">
					<div className="texto">
						<h5>Seu Pedido:</h5>
					</div>
					<OrderInfo />
				</div>
			</div>
		</div>
	)
}

export default CheckoutConfirmation;