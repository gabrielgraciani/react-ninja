import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import './assets/css/styles.css';

const Link = (props) => (
	<NavLink activeStyle={{color: 'red'}} {...props} />
);

class App extends Component{
	render(){
	  return (
		<BrowserRouter>
			<div className="App">
				<ul>
					<li><Link to="/" exact>Home</Link></li>
					<li><Link to="/sobre">Sobre</Link></li>
					<li><Link to="/blog">Blog</Link></li>
					<li><Link to="/contato">Contato</Link></li>
				</ul>

				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/(sobre|contato)" component={Page} />
					<Route path="/blog" component={Blog} />
					<Route component={Error404} />
				</Switch>
			</div>
		</BrowserRouter>
	  );
	}
}

const Home = () => (
	<h1>Home</h1>
);

const Page = ({match}) => (
	<h1>{match.url}</h1>
);

const Blog = () => (
	<div>
		<h1>Blog</h1>

		<ul>
			<li><Link to="/blog/post-1">Post1</Link></li>
			<li><Link to="/blog/post-2">Post2</Link></li>
		</ul>

		<Route path="/blog/:post(post-1|post-2)" component={Post} />
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
