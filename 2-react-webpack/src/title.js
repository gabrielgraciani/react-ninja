'use strict'

import React from 'react';

const Title = ({ name, lastname}) => (
	<h1>Olá {`${name} ${lastname}`}</h1>
);

Title.defaultProps = {
	name: 'desconhecido',
	lastname: 'sem sobrenome'
};

export default Title;