import React from 'react';
import {Button, Grid} from '@material-ui/core';
import {ReactComponent as Logo} from './logo-react-zzaria.svg';
import firebase from 'firebase/app';

var firebaseConfig = {
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

const Login = () => (
	<div id="wrap_login">
		<Grid container justify='center' spacing={40}>
			<Grid item>
				<Logo />
			</Grid>

			<Grid item xs={12} container justify="center">
				<Button variant="contained" fullWidth className="githubbutton">Entrar com GitHub</Button>
			</Grid>
		</Grid>
	</div>
);

export default Login;