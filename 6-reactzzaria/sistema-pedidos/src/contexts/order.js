import React, {createContext, useState} from 'react';
import uuidv4 from 'uuid/v4';

const OrderContext = createContext();

function OrderProvider({children}){
	const [pizzas, addPizza] = useState([]);
	const [orderInProgress, setOrderInProgress] = useState(false);
	const [phone, addPhone] = useState('');
	const [address, addAddress] = useState({});

	function addPizzaToOrder(pizza){
		if(orderInProgress){
			return addPizza((pizzas) => pizzas.concat(newPizza(pizza)));
		}

		setOrderInProgress(true);
		addPizza([newPizza(pizza)]);
	}

	function newPizza(pizza){
		return {
			id: uuidv4(),
			...pizza
		}
	}

	function sendOrder(){
		console.log('send order');
		setOrderInProgress(false);
	}

	function removePizzaFromOrder(id){
		console.log('remover', id);
		addPizza((pizzas) => pizzas.filter(p => p.id !== id))
	}
	return(
		<OrderContext.Provider value={{
			order:{
				pizzas,
				address,
				phone
			},
			addPizzaToOrder,
			sendOrder,
			removePizzaFromOrder,
			addAddress,
			addPhone
		}}>
			{children}
		</OrderContext.Provider>
	)
}

export {OrderProvider, OrderContext};