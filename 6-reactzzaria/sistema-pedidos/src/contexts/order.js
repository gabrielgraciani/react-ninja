import React, {createContext} from 'react';

const OrderContext = createContext();

function OrderProvider({children}){
	function addPizzaToOrder(pizza){
		console.log('order pizza', pizza);
	}
	return(
		<OrderContext.Provider value={{
			addPizzaToOrder
		}}>
			{children}
		</OrderContext.Provider>
	)
}

export {OrderProvider, OrderContext};