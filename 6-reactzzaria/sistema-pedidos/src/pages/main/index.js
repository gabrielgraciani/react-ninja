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
				<Grid container direction="column" alignItems="center">
					<Typography variant="h3" gutterBottom>
						O que vai ser hoje, {userName}? =)
					</Typography>

					<Typography variant="h4" gutterBottom>
						Escolha o tamanho da pizza
					</Typography>

					<Grid container spacing={3}>
						{pizzaSizes.map((pizza) => (
							<Grid item key={pizza.id} xs={4}>
								<Paper className="paper-pizza">
									<div className="pizza-imagem">
										<span>
											{pizza.size}cm
										</span>
									</div>

									<Divider className="divider" />

									<Typography variant="h5">
										{pizza.name}
									</Typography>

									<Typography>
										{pizza.slices} fatias, {pizza.flavours} sabores
									</Typography>
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