import React from 'react';
import Play from './play';
import {connect} from 'react-redux';
import {selectVideoSingle} from '../redux-flow/reducers/video-single/action-creators';


const VideosList = ({videos, handleClick}) => (
	<div id="wrap_videos">
		{Object.keys(videos).map((id) => (
			<div className="video" key={id}>
				<a href="#" onClick={handleClick(id)}>
					<div className="video-thumb">
						<Play className="svg" />
					</div>

					<h2 className="video-title">{videos[id].title}</h2>
				</a>

			</div>
		))}
	</div>
);

const mapStateToProps = (state) =>({
	videos: state.videos
});

const mapDispatchToProps = (dispatch) => ({
	handleClick: (id) => (e) => {
		e.preventDefault();
		dispatch(selectVideoSingle(id))
	}
});


export default connect(mapStateToProps, mapDispatchToProps)(VideosList);