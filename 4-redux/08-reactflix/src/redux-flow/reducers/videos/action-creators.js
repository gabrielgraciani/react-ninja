import {ADD_VIDEO} from './actions';
import {db} from '../../../config/firebase';

export const addVideo = ({id, title}) => ({
	type: ADD_VIDEO,
	payload: {id, title}
});

export const registerVideo = ({id, title}) => async (dispatch) => {
	console.log('cadastrando video...');
	await db.ref('videos').child(id).update({
		id,
		title
	});
	console.log('video cadastrado');

	dispatch(addVideo({id, title}));
};

export const fetchVideos = () => (dispatch) => {
	db.ref('videos').on('value', (snapshot) => {
		const videos = snapshot.val();
		const ordered = Object.keys(videos)
			.sort((a, b) => videos[a].title < videos[b].title ? -1 : 1)
			.map((id) => ({
				id,
				title: videos[id].title
			}));
		ordered.forEach((video) => dispatch(addVideo(video)));
	});
};

	/*db.ref('videos').orderByChild('title').on('child_added', (child) => {
		console.log(child.val());
		dispatch(addVideo(child.val()));
	})*/