import React from 'react';

const SearchCep = () => (
	<div>
		<form action="">
			<input type="text" name="cep" />
			<button type="submit">Buscar endereço</button>
		</form>

		<table>
			<thead>
				<tr>
					<td>CEP</td>
					<td>Endereço</td>
					<td>Bairro</td>
					<td>Cidade</td>
					<td>Estado</td>
				</tr>
			</thead>

			<tbody>
				<tr>
					<td>1098908</td>
					<td>rua tal</td>
					<td>wqewq</td>
					<td>wqeqw</td>
					<td>wqeqw</td>
				</tr>
			</tbody>
		</table>

	</div>
);

export default SearchCep;