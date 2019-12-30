import React from 'react';
import {Button, Grid} from '@material-ui/core';
import {ReactComponent as Logo} from './logo-react-zzaria.svg';

const Login = () => (
	<div id="wrap_login">
		<Grid container direction='column' alignItems='center' spacing={40}>
			<Grid item>
				<Logo />
			</Grid>

			<Grid item>
				<Button>Entrar com GitHub</Button>
			</Grid>
		</Grid>
	</div>
);

export default Login;