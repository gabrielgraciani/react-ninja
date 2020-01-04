import React from 'react';
import {useAuth} from 'hooks';
import OrderInfo from 'ui/order-info';
import Footer from 'ui/footer';
import {Link} from 'react-router-dom';
import {HOME} from 'routes';

function CheckoutSuccess(){
	const {userInfo} = useAuth();
	return(
		<>
			<div id="wrap_checkout" className="confirmation">
				<div className="indent">
					<div className="texto">
						<h4>Prontinho {userInfo.user.firstName}</h4>
						<span>Seu pedido será entregue no endereço abaixo em até</span>
						<h5>40 minutos =)</h5>
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
					<Link to={HOME}>
						<button className="botao ripple rosa">Voltar para a página inicial</button>
					</Link>
				</div>
			</Footer>
		</>

	)
}

export default CheckoutSuccess;