import createReducer from '../create-reducer'
import { SUCCESS, FETCHING } from './actions'

const initialState = {
	address: '',
	city: '',
	code: '',
	district: '',
	state: '',
	status: 1,
	isFetching: false
}

const address = createReducer(initialState, {
	[FETCHING]: (state, action) => ({
		...state,
		isFetching: true
	}),
	[SUCCESS]: (state, action) => ({
		...action.payload,
		isFetching: false
	})
});

export default address