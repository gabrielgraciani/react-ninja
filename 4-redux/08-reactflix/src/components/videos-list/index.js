import React from 'react';
import Play from '../play';
import {connect} from 'react-redux';


const VideosList = ({videos}) => (
	<div id="wrap_videos">
		{Object.keys(videos).map((id) => (
			<div className="video" key={id}>
				<div className="video-thumb">
					<Play className="svg" />
				</div>

				<h2 className="video-title">{videos[id].title}</h2>
			</div>
		))}
	</div>
);

const mapStateToProps = (state) =>({
	videos: state.videos
});



export default connect(mapStateToProps)(VideosList);