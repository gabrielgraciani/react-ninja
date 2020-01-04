import React from 'react';
import {useAuth} from 'hooks';

function CheckoutConfirmation(){
	const {userInfo} = useAuth();
	return(
		<div id="wrap_checkout" className="confirmation">
			<div className="indent">
				<div className="texto">
					<h4>Oi {userInfo.user.firstName}</h4>
					<span>Confere, por favor, se está tudo certo com o seu pedido antes de finalizar?</span>
				</div>

				<div className="bloco">
					<div className="titulo">
						<h5>Seu Pedido</h5>
					</div>
					<div className="texto">
						<span>asdhasodi</span>
					</div>

					<div className="titulo top">
						<h5>Endereço para entrega:</h5>
					</div>
					<div className="texto">
						<span>asdhasodi</span>
					</div>

					<div className="titulo top">
						<h5>Telefone para contato:</h5>
					</div>
					<div className="texto">
						<span>asdhasodi</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CheckoutConfirmation;