import React, {useState, useEffect, useReducer} from 'react';
import {CircularProgress} from '@material-ui/core';

function FormAddress(){
	const [cep, setCep] = useState('');
	const [fetchingCep, setFetchingCep] = useState(false);
	const [addressState, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		async function fetchAddress(){
			if(cep.length < 9){
				return
			}

			setFetchingCep(true);
			const data = await fetch(`https://apps.widenet.com.br/busca-cep/api/cep/${cep}.json`);
			setFetchingCep(false);
			const result = await data.json();

			dispatch({
				type: 'UPDATE_FULL_ADDRESS',
				payload: result
			})
		}

		fetchAddress();
	}, [cep]);

	function handleChangeCep(e){
		setCep(cepMask(e.target.value));
	}

	function cepMask(value){
		return value
			.replace(/\D+/g, '')
			.replace(/(\d{5})(\d)/, '$1-$2')
			.replace(/(-\d{3})\d+?$/, '$1');
	}

	function handleChangeField(e){
		const {name, value} = e.target;
		dispatch({
			type: 'UPDATE_FIELD',
			payload: {name, value}
		})
	}
	return(
		<>
		<div className="conteudo">
			<div className="item">
				<div className="input">
					<label>CEP</label>
					<input type="text" autoFocus value={cep} onChange={handleChangeCep} />
				{fetchingCep && <CircularProgress size={20} />}
				</div>

				{[
					{
						label: 'Rua',
						className: 'maior',
						name: 'address'
					},
					{
						label: 'Número',
						className: 'menor',
						name: 'number'
					},
					{
						label: 'Complemento',
						name: 'complement'
					},
					{
						label: 'Cidade',
						className: 'maior',
						name: 'city'
					},
					{
						label: 'Estado',
						className: 'menor',
						name: 'state'
					}
				].map((field) => (
					<div className={`input ${field.className}`} key={field.name}>
						<label>{field.label}</label>
						<input type="text" name={field.name} value={addressState[field.name]} onChange={handleChangeField} disabled={fetchingCep} />
					</div>
				))}

			</div>
		</div>
		</>
	)
}

function reducer(state, action){
	if(action.type === 'UPDATE_FULL_ADDRESS'){
		return{
			...state,
			...action.payload
		}
	}

	if(action.type === 'UPDATE_FIELD'){
		return{
			...state,
			[action.payload.name]: action.payload.value
		}
	}
	return state
}

const initialState = {
	code: '',
	address: '',
	number: '',
	district: '',
	complement: '',
	city: '',
	state: '',
	error: null
};

export default FormAddress