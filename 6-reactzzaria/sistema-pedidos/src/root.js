import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {CssBaseline, createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import 'assets/css/styles.css';
import App from './app';
import AuthProvider from 'contexts/auth';

const theme = createMuiTheme({
	typography: {
		useNextVariants: true
	}
});

const Root = () =>(
	<MuiThemeProvider theme={theme}>
		<AuthProvider>
			<CssBaseline />

			<BrowserRouter>
				<Route component={App} />
			</BrowserRouter>
		</AuthProvider>
	</MuiThemeProvider>

);

export default Root;
