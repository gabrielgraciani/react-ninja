import React from 'react';
import 'milligram';
import 'normalize.css';
import './assets/css/styles.css';
import VideosList from './components/videos-list';

const App = () => (
	<div className="container_app">
		<header>
			<h1>ReactFlix</h1>
		</header>

		<main>
			<VideosList />
		</main>

		<footer>
			&copy; 2019
		</footer>
	</div>
);

export default App;
