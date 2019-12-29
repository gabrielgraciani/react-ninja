import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
	render(){
		return (
			<>
			{[1, 2, 3].map((item) => (
				<Fragment key={item}>
					<span>item: {item}</span>
					<span>numero: {item}</span>
				</Fragment>
			))}
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</>
		);
	}
}

export default App;
