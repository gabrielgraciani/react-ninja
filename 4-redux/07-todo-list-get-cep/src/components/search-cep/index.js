import React from 'react';
import SearchCep from './search-cep';
import {connect} from 'react-redux';
import {fetchAddress} from '../../redux-flow/reducers/address/action-creators';


const SearchCepContainer = ({address, handleSubmit}) => (
	<SearchCep handleSubmit={handleSubmit} {...address} />
);

const mapStateToProps = (state) => ({
	address: state.address
});


const mapDispatchToProps = (dispatch) =>  ({
	handleSubmit: (e) => {
		e.preventDefault();
		dispatch(fetchAddress(e.target.cep.value));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchCepContainer)