import React, {useContext} from 'react';
import {Button, Grid} from '@material-ui/core';
import {ReactComponent as Logo} from 'assets/images/logo-react-zzaria.svg';
import {AuthContext} from 'contexts/auth';


function Login(){
	const {login} = useContext(AuthContext);

	return(
		<div id="wrap_login">
			<Grid container justify='center' spacing={7}>
				<Grid item>
					<Logo />
				</Grid>

				<Grid item xs={12} container justify="center">
					<Button variant="contained" fullWidth className="githubbutton"
							onClick={login}>Entrar com GitHub</Button>
				</Grid>
			</Grid>
		</div>
	);
}

export default Login;