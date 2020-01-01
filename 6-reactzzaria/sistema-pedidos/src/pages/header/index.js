import React, {useState, useContext} from 'react';
import {AppBar, Toolbar, IconButton, Menu, MenuItem} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';
import {ReactComponent as Logo} from 'assets/images/logo-react-zzaria.svg';
import {AuthContext} from 'contexts/auth';


const Header = () => {
	const {logout, userInfo} = useContext(AuthContext);
	const [anchorElement, setAnchorElement] = useState(null);
	const handleOpenMenu = (e) => {
		setAnchorElement(e.target);
	};
	const handleClose = () => {
		setAnchorElement(null);
	};
	const userName = userInfo.user.email.split('t')[0];


	return(
		<AppBar>
			<Toolbar className="indent-padrao">
				<div className="logo-header">
					<Logo />
				</div>

				<div className="texto">
					Olá {userName} =)
				</div>
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

export default Header;