'use strict'
import React, {Component} from 'react';

class App extends Component{
	constructor(){
		super()
		this.state = {
			value: 'valor inicial',
			checked: false
		}
	}
	render(){
		return(
			<div>
				<form>
					<input type="text" value={this.state.value} onChange={(e) =>{
						this.setState({
							value: e.target.value
						})
					}} />

					<label >
						<input type="checkbox" value="checkbox" checked={this.state.checked}
						   onChange={(e) =>
						   	this.setState({checked: !this.state.checked})
						   } />
						checkbox
					</label>
				</form>
			</div>
		)
	}
}

export default App;