import React, {PureComponent} from 'react';
import SearchCep from './search-cep';
import ajax from '@fdaciuk/ajax';
import {connect} from 'react-redux';
import {updateAddress} from '../../redux-flow/reducers/address/action-creators';


class SearchCepContainer extends PureComponent{
	state = {isFetching: false};

	handleSubmit = async (e) => {
		e.preventDefault();
		this.setState({isFetching: true});
		const cep = e.target.cep.value;

		const response = await ajax().get('https://apps.widenet.com.br/busca-cep/api/cep.json', {code: cep});
		this.setState({isFetching: false});
		this.props.dispatch(updateAddress(response));
	};

	render(){
		return(
			<SearchCep {...this.state} handleSubmit={this.handleSubmit} {...this.props.address} />
		)
	}
}

const mapStateToProps = (state) => ({
	address: state.address
});

export default connect(mapStateToProps)(SearchCepContainer)