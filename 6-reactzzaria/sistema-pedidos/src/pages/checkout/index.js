import React from 'react';
import Footer from 'ui/footer';
import {CHECKOUT_CONFIRMATION} from 'routes';
import {Link} from 'react-router-dom';
import OrderInfo from 'ui/order-info';

function Checkout(){
	return(
		<>
			<div id="wrap_checkout">
				<div className="indent">
					<div className="col1">
						<div className="bloco">
							<div className="titulo">
								<h5>Qual o endereço para entrega?</h5>
							</div>

							<div className="conteudo">
								<div className="item">
									<div className="input">
										<label>CEP</label>
										<input type="text" autoFocus />
									</div>
									<div className="input maior">
										<label>Rua</label>
										<input type="text" />
									</div>
									<div className="input menor">
										<label>Número</label>
										<input type="text" />
									</div>
									<div className="input">
										<label>Complemento</label>
										<input type="text" />
									</div>
									<div className="input maior">
										<label>Cidade</label>
										<input type="text" />
									</div>
									<div className="input menor">
										<label>Estado</label>
										<input type="text" />
									</div>
								</div>

							</div>
						</div>

						<div className="bloco top">
							<div className="titulo">
								<h5>Qual seu telefone</h5>
							</div>

							<div className="conteudo">
								<div className="item">
									<div className="input">
										<label>Telefone</label>
										<input type="text" />
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col2">
						<div className="bloco">
							<div className="titulo">
								<h5>Informações do seu pedido:</h5>
							</div>

							<div className="conteudo">
								<OrderInfo showOptions />
							</div>

						</div>
					</div>
				</div>
			</div>

			<Footer>
				<div className="texto full">
					<Link to={CHECKOUT_CONFIRMATION}>
						<button className="botao ripple azul">Confirmar dados</button>
					</Link>
				</div>
			</Footer>
		</>

	)
}

export default Checkout;