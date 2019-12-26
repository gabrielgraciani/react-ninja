import React from 'react';
import {connect} from 'react-redux';
import {registerVideo} from '../redux-flow/reducers/videos/action-creators';
import {closeRegisterVideo} from '../redux-flow/reducers/ui/action-creators';

const RegisterVideo = ({onSubmit, onCloseRegisterVideo}) => (
	<form className="form-cadastro" onSubmit={onSubmit}>
		<h2>Cadastrar vídeo</h2>

		<label htmlFor="id">ID do vídeo:</label>
		<input type="text" id="id" name="id" />

		<label htmlFor="title">Título do vídeo:</label>
		<input type="text" id="title" name="title"/>

		<button type="submit">Cadastrar</button>

		<button type="button" className="close-form" onClick={onCloseRegisterVideo}>&times;</button>
	</form>
);

const mapDispatchToProps = (dispatch) => ({
	onSubmit: async (e) => {
		e.preventDefault();
		e.persist();

		const {
			id: {value: id},
			title: {value: title}
		} = e.target;

		await dispatch(registerVideo({
			id: id,
			//id
			title: title
			//title
		}));
		e.target.reset();
		e.target[0].focus();
	},

	onCloseRegisterVideo: () => dispatch(closeRegisterVideo())
});

export default connect(null, mapDispatchToProps)(RegisterVideo);