import React from 'react';
import {useOrder} from 'hooks';
import {singularOrPlural} from 'utils';

function Checkout(){
	const {order} = useOrder();
	console.log(order);
	return(
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
							{order.pizzas.map((pizza, index) => {
								const {pizzaFlavours, pizzaSize, quantity} = pizza;
								const {name, slices, flavours} = pizzaSize;
								return(
									<div className="texto" key={index}>
										<span>{quantity} {singularOrPlural(name, 'pizza', 'pizzas')} <b>{name.toUpperCase()} </b>
											({slices} {singularOrPlural(slices, 'fatia', 'fatias')}, {flavours} {singularOrPlural(flavours, 'sabor', 'sabores')})
										</span>

										<span>
											{singularOrPlural(pizzaFlavours.length, 'no sabor', 'nos sabores')} <b>{pizzaFlavours.map(({name}) => name).join(', ')}</b>
										</span>
									</div>
								)
							})}



						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Checkout;