import React from 'react';
import 'milligram';
import 'normalize.css';
import './assets/css/styles.css';
import VideosList from './components/videos-list';
import VideoSingle from './components/video-single';
import RegisterVideo from './components/register-video';


const App = () => (
	<div className="container_app">
		<header>
			<h1 className="title-header">ReactFlix</h1>
			<button className="button-header">Cadastrar vídeo</button>
		</header>

		<main>
			<RegisterVideo />
			<VideoSingle />
			<VideosList />
		</main>

		<footer>
			&copy; 2019
		</footer>
	</div>
);

export default App;
