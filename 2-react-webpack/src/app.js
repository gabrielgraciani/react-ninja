'use strict'
import React, {Component} from 'react';
import Button from './button';
import Square from './square';
import Timer from './timer';

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
				{this.state.showTimer && <Timer />}
				<button onClick={() => {
					this.setState({showTimer: !this.state.showTimer })
				}}>Show / hide timer</button>
			</div>
		)
	}
}

export default App;