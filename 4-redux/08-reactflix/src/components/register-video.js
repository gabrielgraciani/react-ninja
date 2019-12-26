import React from 'react';
import {connect} from 'react-redux';
import {addVideo} from '../redux-flow/reducers/videos/action-creators';

const RegisterVideo = ({onSubmit}) => (
	<form className="form-cadastro" onSubmit={onSubmit}>
		<h2>Cadastrar vídeo</h2>

		<label htmlFor="id">ID do vídeo:</label>
		<input type="text" id="id" name="id" />

		<label htmlFor="title">Título do vídeo:</label>
		<input type="text" id="title" name="title"/>

		<button type="submit">Cadastrar</button>
	</form>
);

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (e) => {
		e.preventDefault();

		const {
			id: {value: id},
			title: {value: title}
		} = e.target;

		dispatch(addVideo({
			id: id,
			//id
			title: title
			//title
		}));
	}
});

export default connect(null, mapDispatchToProps)(RegisterVideo);