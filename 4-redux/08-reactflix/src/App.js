import React from 'react';
import 'milligram';
import 'normalize.css';
import './assets/css/styles.css';
import Play from './components/play';

const App = () => (
	<div className="container_app">
		<header>
			<h1>ReactFlix</h1>
		</header>

		<main>
			<div id="wrap_videos">
				{Array.from({length: 10}).map((item, index) => (
					<div className="video" key={index}>
						<div className="video-thumb">
							<Play className="svg" />
						</div>

						<h2 className="video-title">Título do vídeo</h2>
					</div>
				))}
			</div>
		</main>

		<footer>
			&copy; 2019
		</footer>
	</div>
);

export default App;
