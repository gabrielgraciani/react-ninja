import React, {Component} from 'react';
import 'milligram';
import 'normalize.css';
import './assets/css/styles.css';
import VideosList from './components/videos-list';
import VideoSingle from './components/video-single';
import RegisterVideo from './components/register-video';
import Header from './components/header';
import Footer from './components/footer';
import {connect} from 'react-redux';
import {fetchVideos} from './redux-flow/reducers/videos/action-creators';

class App extends Component{
	componentDidMount(){
		this.props.fetchVideos()
	}
	render(){
		const {isRegisterVideoFormOpened, videoSingleId, videos} = this.props;
		return(
			<div className="container_app">
				<Header />

				<main>
					{isRegisterVideoFormOpened && <RegisterVideo />}
					{videoSingleId && <VideoSingle id={videoSingleId} title={videos[videoSingleId].title} />}
					<VideosList />
				</main>

				<Footer />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	isRegisterVideoFormOpened: state.ui.isRegisterVideoFormOpened,
	videoSingleId : state.videoSingle,
	videos: state.videos
});

const mapDispatchToProps = {fetchVideos};

export default connect(mapStateToProps, mapDispatchToProps)(App);
