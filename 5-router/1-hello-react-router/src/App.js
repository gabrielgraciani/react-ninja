import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

function App() {
  return (
  	<BrowserRouter>
		<div className="App">
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/sobre">Sobre</Link></li>
				<li><Link to="/blog">Blog</Link></li>
			</ul>

			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/sobre" component={Sobre} />
				<Route path="/blog" component={Blog} />
				<Route component={Error404} />
			</Switch>
		</div>
	</BrowserRouter>
  );
}

const Home = () => (
	<h1>Home</h1>
);

const Sobre = () => (
	<h1>Sobre</h1>
);

const Blog = () => (
	<div>
		<h1>Blog</h1>

		<ul>
			<li><Link to="/blog/post-1">Post1</Link></li>
			<li><Link to="/blog/post-2">Post2</Link></li>
		</ul>

		<Route path="/blog/:post" component={Post} />
	</div>
);

const Post = ({match}) => (
	<div>
		<h2>Post: {match.params.post}</h2>
	</div>
);

const Error404 = () => (
	<h1>Página não encontrada</h1>
);

export default App;
