import React, {useState, useContext} from 'react';
import {AppBar, Toolbar, IconButton, Typography, Menu, MenuItem} from '@material-ui/core';
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

	return(
		<AppBar>
			<Toolbar className="indent-padrao">
				<div className="logo-header">
					<Logo />
				</div>

				<Typography color="inherit">Olá {userInfo.user.email} =) </Typography>
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
	)
};

export default Main;