import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyBFLmUSiM1Iq9mFGdORfhIPgPWlmwIA2JE",
	authDomain: "reactzzaria-a7216.firebaseapp.com",
	databaseURL: "https://reactzzaria-a7216.firebaseio.com",
	projectId: "reactzzaria-a7216",
	storageBucket: "reactzzaria-a7216.appspot.com",
	messagingSenderId: "1004184943272",
	appId: "1:1004184943272:web:a1251665128a05be9f209d",
	measurementId: "G-XDP1NGPZFX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;