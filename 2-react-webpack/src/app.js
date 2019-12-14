'use strict'
import React, {Component} from 'react';

class App extends Component{
	constructor() {
		super();
		this.state = {
			text: 'gabriel'
		}
	}
	render(){
		return(
			<div className="container" onClick={() => this.setState({text: 'outro texto'})}>
				{this.state.text}
			</div>
		)
	}
}

export default App;