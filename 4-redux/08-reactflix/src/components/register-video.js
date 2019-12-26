import React from 'react';
import {connect} from 'react-redux';

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
		dispatch({
			type: 'videos:ADD_VIDEO',
			payload:{
				id: '8x4KROogMqo',
				title: 'barbixas'
			}
		})
	}
});

export default connect(null, mapDispatchToProps)(RegisterVideo);