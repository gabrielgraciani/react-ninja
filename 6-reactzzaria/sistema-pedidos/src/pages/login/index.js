import React, {Component} from 'react';
import {Button, Grid} from '@material-ui/core';
import {ReactComponent as Logo} from './logo-react-zzaria.svg';
import firebase from 'firebase/app';
import 'firebase/auth';

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

class Login extends Component {
	state = {
		isUserLoggedIn: false,
		user: null
	};

	componentDidMount(){
		firebase.auth().onAuthStateChanged((user) => {
			console.log('dados do usuario:', user);
			this.setState({
				isUserLoggedIn: !!user,
				user
			});
		})
	}

	login(){
		const provider = new firebase.auth.GithubAuthProvider();
		firebase.auth().signInWithRedirect(provider);
	}

	logout = () =>{
		firebase.auth().signOut().then(() => {
			console.log('deslogou');
			this.setState({isUserLoggedIn: false, user: null});
		})
	};

	render(){
		const {isUserLoggedIn, user} = this.state;
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
							<Button variant="contained" onClick={this.logout}>Sair</Button>
							</>
						)}

						{!isUserLoggedIn && (
							<Button variant="contained" fullWidth className="githubbutton"
									onClick={this.login}>Entrar com GitHub</Button>
						)}

					</Grid>
				</Grid>
			</div>
		);
	}
};

export default Login;