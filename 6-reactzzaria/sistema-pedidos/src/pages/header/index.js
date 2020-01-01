import React, {useState, useContext} from 'react';
import {AppBar, Toolbar, IconButton, Menu, MenuItem} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';
import {ReactComponent as Logo} from 'assets/images/logo-react-zzaria.svg';
import {AuthContext} from 'contexts/auth';
import {Link} from 'react-router-dom';
import {HOME} from 'routes';


const Header = () => {
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
					<Link to={HOME}>
						<Logo />
					</Link>
				</div>

				<div className="texto">
					Olá {userInfo.user.firstName} =)
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