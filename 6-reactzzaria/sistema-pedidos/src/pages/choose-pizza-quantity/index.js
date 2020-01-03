import React from 'react';
import HeaderContent from 'ui/header-content'

function ChoosePizzaQuantity() {
	return(
		<>
			<HeaderContent>
				<div className="texto top">
					<h4>Quantas pizzas você gostaria <br />
						de pedir, com esses sabores?</h4>
				</div>
			</HeaderContent>

			<div id="wrap_quantidade">
				<div className="indent">
					<div className="input">
						<input type="number" value="1" autoFocus />
					</div>
				</div>
			</div>


		</>
	)
}

export default ChoosePizzaQuantity;