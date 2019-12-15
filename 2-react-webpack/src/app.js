'use strict'
import React, {Component} from 'react';
import Button from './button';

class App extends Component{
	constructor() {
		super();
		this.state = {
			showTimer: true
		}
	}

	render(){
		return(
			<div>
				<Button handleClick={() => alert('clicou')}>Clique em mim</Button>
			</div>
		)
	}
}

export default App;