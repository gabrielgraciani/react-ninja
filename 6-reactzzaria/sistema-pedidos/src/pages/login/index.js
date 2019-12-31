import React, {useState, useEffect, useCallback, useContext} from 'react';
import {Button, Grid} from '@material-ui/core';
import {ReactComponent as Logo} from './logo-react-zzaria.svg';
import {AuthContext} from 'contexts/auth';
import firebase from 'services/firebase';


function Login(){
	const [userInfo, setUserInfo] = useState({
		isUserLoggedIn: false,
		user: null
	});
	const {login} = useContext(AuthContext);

	const {isUserLoggedIn, user} = userInfo;

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			console.log('dados do usuario:', user);
			setUserInfo({
				isUserLoggedIn: !!user,
				user
			});
		})
	}, []);


	const logout = useCallback(() =>{
		firebase.auth().signOut().then(() => {
			console.log('deslogou');
			setUserInfo({
				isUserLoggedIn: false,
				user: null
			});
		})
	}, []);

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