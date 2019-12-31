import React, {useState, useContext} from 'react';
import {AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Grid} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';
import {ReactComponent as Logo} from 'assets/images/logo-react-zzaria.svg';
import {AuthContext} from 'contexts/auth';


const Main = () => {
	const {logout, userInfo} = useContext(AuthContext);
	const [anchorElement, setAnchorElement] = useState(null);
	const handleOpenMenu = (e) => {
		setAnchorElement(e.target);
	};
	const handleClose = () => {
		setAnchorElement(null);
	};
	const userName = userInfo.user.email

	return(
		<>
			<AppBar>
				<Toolbar className="indent-padrao">
					<div className="logo-header">
						<Logo />
					</div>

					<Typography color="inherit">Olá {userName} =) </Typography>
					{/*<Typography color="inherit">Olá {userInfo.user.displayName.split(' ')[0])} =) </Typography> */}

					<IconButton color="inherit" onClick={handleOpenMenu}>
						<AccountCircle />
					</IconButton>

					<Menu
						open={!!anchorElement}
						onClose={handleClose}
						anchorEl={anchorElement}
					>
						<MenuItem onClick={logout}>Sair</MenuItem>
					</Menu>
				</Toolbar>
			</AppBar>

			<div className="main">
				<Grid container justify="center">
					<Grid item>
						<Typography variant="h3">
							O que vai ser hoje, {userName}? =)
						</Typography>
					</Grid>
				</Grid>
			</div>
		</>
	)
};

export default Main;