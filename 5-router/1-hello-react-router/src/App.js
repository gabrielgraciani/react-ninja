import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';

function App() {
  return (
  	<BrowserRouter>
		<div className="App">
			<Link to="/sobre">Sobre</Link>

			<Route path="/sobre" component={Sobre} />
		</div>
	</BrowserRouter>
  );
}

const Sobre = () => (
	<h1>Sobre</h1>
);

export default App;
