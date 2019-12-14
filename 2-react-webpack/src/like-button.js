'use strict'
import React from 'react';
import Button from './button';

const LikeButton = () => (
	<Button handleClick={() => alert('curtir')}>Curtir</Button>
);
export default LikeButton