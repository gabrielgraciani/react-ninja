import React, {useState, useContext} from 'react';
import {AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Grid, Paper, Divider} from '@material-ui/core';
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
	const userName = userInfo.user.email.split('t')[0];

	return(
		<>
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

			<div className="main">
				<Grid container direction="column" alignItems="center">
					<div className="texto top bottom">
						<h3>O que vai ser hoje, {userName}? =)</h3>
					</div>

					<div className="texto">
						<h4>Escolha o tamanho da pizza</h4>
					</div>

					<Grid container spacing={3} className="container-pizza">
						{pizzaSizes.map((pizza) => (
							<Grid item key={pizza.id} xs>
								<Paper className="paper-pizza">
									<div className="pizza-imagem">
										<span>
											{pizza.size}cm
										</span>
									</div>

									<Divider className="divider" />

									<div className="texto">
										<h5>{pizza.name}</h5>
									</div>

									<div className="texto">
										<span>{pizza.slices} fatias, {pizza.flavours} sabores</span>
									</div>
								</Paper>
							</Grid>
						))}
					</Grid>
				</Grid>
			</div>
		</>
	)
};

const pizzaSizes = [
	{
		id: 0,
		name: 'Pequena',
		size: 28,
		slices: 2,
		flavours: 1
	},
	{
		id: 1,
		name: 'Média',
		size: 30,
		slices: 6,
		flavours: 2
	},
	{
		id: 2,
		name: 'Grande',
		size: 32,
		slices: 8,
		flavours: 3
	}
];

export default Main;