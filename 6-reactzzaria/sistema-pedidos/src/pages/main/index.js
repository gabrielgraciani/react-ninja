import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, Menu, MenuItem} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';
import {ReactComponent as Logo} from 'assets/images/logo-react-zzaria.svg';


const Main = () => (
	<AppBar>
		<Toolbar>
			<Logo />

			<Typography color="inherit">Olá João =)</Typography>

			<IconButton color="inherit">
				<AccountCircle />
			</IconButton>

			<Menu open>
				<MenuItem>Sair</MenuItem>
			</Menu>
		</Toolbar>
	</AppBar>
);

export default Main;