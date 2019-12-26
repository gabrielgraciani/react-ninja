import firebase from 'firebase';
import app from 'firebase/app';

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

export {db}