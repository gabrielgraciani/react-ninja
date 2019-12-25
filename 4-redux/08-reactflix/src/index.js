import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './redux-flow/configure-store';
import firebase from 'firebase';
import app from 'firebase/app';

const store = configureStore();

const config = {
	apiKey: "AIzaSyAZlLJYAL6BkmE1WGGBAAXOQ6NMtjkMYfk",
	authDomain: "reactflix-5a475.firebaseapp.com",
	databaseURL: "https://reactflix-5a475.firebaseio.com",
	projectId: "reactflix-5a475",
	storageBucket: "reactflix-5a475.appspot.com",
	messagingSenderId: "677388426918",
	appId: "1:677388426918:web:57e696ad4c195ab6b1de67",
	measurementId: "G-QP5XFZ3655"
};
app.initializeApp(config);
const db = firebase.database();
const videos = db.ref('videos');
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
