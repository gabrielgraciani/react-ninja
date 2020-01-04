import React, {createContext, useState} from 'react';

const OrderContext = createContext();

function OrderProvider({children}){
	const [pizzas, addPizza] = useState([]);
	const [orderInProgress, setOrderInProgress] = useState(false);

	function addPizzaToOrder(pizza){
		if(orderInProgress){
			return addPizza((pizzas) => pizzas.concat(pizza));
		}

		setOrderInProgress(true);
		addPizza([pizza]);
	}

	function sendOrder(){
		console.log('send order');
		setOrderInProgress(false);
	}
	return(
		<OrderContext.Provider value={{
			order:{
				pizzas
			},
			addPizzaToOrder,
			sendOrder
		}}>
			{children}
		</OrderContext.Provider>
	)
}

export {OrderProvider, OrderContext};