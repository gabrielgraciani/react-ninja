import React, {PureComponent} from 'react';
import SearchCep from './search-cep';
import ajax from '@fdaciuk/ajax';

class SearchCepContainer extends PureComponent{
	state = {
		address: '',
		city: '',
		code: '',
		district: '',
		state: '',
		status: 200
	};

	async componentDidMount(){
		const response = await ajax().get('https://apps.widenet.com.br/busca-cep/api/cep.json', {code: '13450-021'});
		this.setState(response);
	}
	render(){
		return(
			<SearchCep {...this.state} />
		)
	}
}

export default SearchCepContainer