import React from 'react';
import HeaderContent from 'ui/header-content';
import SingularOrPlural from 'utils';
import {Redirect} from 'react-router-dom';
import {HOME} from 'routes';

const ChoosePizzaFlavours = ({location}) => {
	if(!location.state){
		return <Redirect to={HOME} />
	}
	const {flavours} = location.state;
	return(
		<>
			<HeaderContent>
				<div className="texto top">
					<h4>Escolha até {flavours} {SingularOrPlural(flavours, 'sabor', 'sabores')}:</h4>
				</div>
			</HeaderContent>
		</>
	)
};

export default ChoosePizzaFlavours;