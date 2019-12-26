import React from 'react';

const RegisterVideo = () => (
	<form className="form-cadastro">
		<h2>Cadastrar vídeo</h2>

		<label htmlFor="id">ID do vídeo:</label>
		<input type="text" id="id" name="id" />

		<label htmlFor="title">Título do vídeo:</label>
		<input type="text" id="title" name="title"/>

		<button type="submit">Cadastrar</button>
	</form>
);

export default RegisterVideo