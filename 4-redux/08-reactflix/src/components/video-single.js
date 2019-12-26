import React from 'react';

const VideoSingle = ({id, title}) => (
	<div className="video-single">
		<iframe width="560" height="480" src={`https://www.youtube-nocookie.com/embed/${id}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
		<h2 className="title">{title}</h2>
	</div>
);

export default VideoSingle