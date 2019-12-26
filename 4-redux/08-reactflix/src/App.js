import React from 'react';
import 'milligram';
import 'normalize.css';
import './assets/css/styles.css';
import VideosList from './components/videos-list';
import VideoSingle from './components/video-single';
import RegisterVideo from './components/register-video';
import Header from './components/header';
import Footer from './components/footer';


const App = () => (
	<div className="container_app">
		<Header />

		<main>
			<RegisterVideo />
			<VideoSingle />
			<VideosList />
		</main>

		<Footer />
	</div>
);

export default App;
