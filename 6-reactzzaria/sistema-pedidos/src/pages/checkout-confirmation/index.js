import React from 'react';
import {useAuth} from 'hooks';
import OrderInfo from 'ui/order-info';
import Footer from 'ui/footer';
import {Link} from 'react-router-dom';

function CheckoutConfirmation(){
	const {userInfo} = useAuth();
	return(
		<>
			<div id="wrap_checkout" className="confirmation">
				<div className="indent">
					<div className="texto">
						<h4>Oi {userInfo.user.firstName}</h4>
						<span>Confere, por favor, se está tudo certo com o seu pedido antes de finalizar?</span>
					</div>

					<div className="conteudo">
						<div className="titulo">
							<h5>Seu Pedido:</h5>
						</div>
						<OrderInfo />

						<div className="titulo top">
							<h5>Endereço para entrega:</h5>
						</div>


						<div className="titulo top">
							<h5>Telefone para contato:</h5>
						</div>
					</div>
				</div>
			</div>

			<Footer>
				<div className="texto centro">
					<Link>
						<button className="botao ripple azul">TUDO CERTO!</button>
					</Link>
				</div>
			</Footer>
		</>

	)
}

export default CheckoutConfirmation;