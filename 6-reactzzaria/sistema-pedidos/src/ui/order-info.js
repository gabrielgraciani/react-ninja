import React from 'react';
import {singularOrPlural} from 'utils';
import {useOrder} from 'hooks';
import {IconButton} from '@material-ui/core';
import {Close} from '@material-ui/icons';


function OrderInfo(){
	const {order} = useOrder();
	console.log(order);
	return(
		<>
			{order.pizzas.map((pizza, index) => {
				const {pizzaFlavours, pizzaSize, quantity} = pizza;
				const {name, slices, flavours} = pizzaSize;
				return(
					<div className="texto" key={index}>
						<span><b>{quantity}</b> {singularOrPlural(name, 'pizza', 'pizzas')} <b>{name.toUpperCase()} </b>
							({slices} {singularOrPlural(slices, 'fatia', 'fatias')}, {flavours} {singularOrPlural(flavours, 'sabor', 'sabores')})
						</span>

						<span>
						{singularOrPlural(pizzaFlavours.length, 'no sabor', 'nos sabores')} <b>{pizzaFlavours.map(({name}) => name).join(', ')}</b>
						</span>

						<IconButton title="Remover" color="secondary">
							<Close />
						</IconButton>
					</div>
				)
			})}
		</>
	)
}

export default OrderInfo;