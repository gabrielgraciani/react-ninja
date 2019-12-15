'use strict'

import React from 'react';

const Search = ({handleSearch, isDisabled}) => (
	<div className="search">
		<input
			type="search"
			placeholder="Digite o nome do usuário no github"
			onKeyUp={handleSearch}
			disabled={isDisabled}
		/>
	</div>
);

Search.propTypes = {
	handleSearch: React.PropTypes.func.isRequired
}

export default Search