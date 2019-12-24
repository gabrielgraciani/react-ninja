import React from 'react';
import Play from '../play';


const VideosList = () => (
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
);

export default VideosList;