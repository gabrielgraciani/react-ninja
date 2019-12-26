import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './redux-flow/configure-store';
import {db} from './config/firebase';

const store = configureStore();


const videos = db.ref('videos');

videos.child('123').set({
	id: '123',
	title: 'teste'
});

videos.on('value', (snapshot) => {
	console.log('snapshot: ', snapshot.val());
}, (error) => {
	console.log('error:', error);
});


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
