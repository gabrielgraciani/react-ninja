import React, {useState, useEffect} from 'react';
import {Button, Grid} from '@material-ui/core';
import {ReactComponent as Logo} from './logo-react-zzaria.svg';
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

const login = () =>{
	const provider = new firebase.auth.GithubAuthProvider();
	firebase.auth().signInWithRedirect(provider);
};

function Login(){
	const [userInfo, setUserInfo] = useState({
		isUserLoggedIn: false,
		user: null
	});

	const {isUserLoggedIn, user} = userInfo;

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			console.log('dados do usuario:', user);
			setUserInfo({
				isUserLoggedIn: !!user,
				user
			});
		})
	}, [])

	const logout = () =>{
		firebase.auth().signOut().then(() => {
			console.log('deslogou');
			setUserInfo({
				isUserLoggedIn: false,
				user: null
			});
		})
	};

	return(
		<div id="wrap_login">
			<Grid container justify='center' spacing={7}>
				<Grid item>
					<Logo />
				</Grid>

				<Grid item xs={12} container justify="center">
					{isUserLoggedIn && (
						<>
						<pre>{user.email}</pre>
						<Button variant="contained" onClick={logout}>Sair</Button>
						</>
					)}

					{!isUserLoggedIn && (
						<Button variant="contained" fullWidth className="githubbutton"
								onClick={login}>Entrar com GitHub</Button>
					)}
				</Grid>
			</Grid>
		</div>
	);
}

export default Login;