import React from 'react';
import 'milligram';
import 'normalize.css';
import './assets/css/styles.css';
import VideosList from './components/videos-list';
import VideoSingle from './components/video-single';
import RegisterVideo from './components/register-video';
import Header from './components/header';
import Footer from './components/footer';
import {connect} from 'react-redux';


const App = ({isRegisterVideoFormOpened}) => (
	<div className="container_app">
		<Header />

		<main>
			{isRegisterVideoFormOpened && <RegisterVideo />}
			<VideoSingle />
			<VideosList />
		</main>

		<Footer />
	</div>
);

const mapStateToProps = (state) => ({
	isRegisterVideoFormOpened: state.ui.isRegisterVideoFormOpened
});

export default connect(mapStateToProps)(App);
