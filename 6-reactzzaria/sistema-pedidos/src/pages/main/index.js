import React from 'react';
import {AppBar, Toolbar, IconButton} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';
import {ReactComponent as Logo} from 'assets/images/logo-react-zzaria.svg';


const Main = () => (
	<AppBar>
		<Toolbar>
			<Logo />
			<IconButton color="inherit">
				<AccountCircle />
			</IconButton>
		</Toolbar>
	</AppBar>
);

export default Main;