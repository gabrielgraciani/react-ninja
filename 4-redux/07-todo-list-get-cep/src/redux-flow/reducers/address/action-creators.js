import { SUCCESS, FETCHING } from './actions'
import ajax from '@fdaciuk/ajax';


export const fetchAddress = (cep) => async (dispatch, getState) => {
	dispatch({type: FETCHING});

	const response = await ajax().get('https://apps.widenet.com.br/busca-cep/api/cep.json', {code: cep});

	dispatch({
		type: SUCCESS,
		payload: response
	});
};