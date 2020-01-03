import React, {createContext} from 'react';

const OrderContext = createContext();

function OrderProvider({children}){
	return(
		<OrderContext.Provider value={{}}>
			{children}
		</OrderContext.Provider>
	)
}

export {OrderProvider, OrderContext};