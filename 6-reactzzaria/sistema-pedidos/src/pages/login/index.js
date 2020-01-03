import React, {useContext} from 'react';
import {ReactComponent as Logo} from 'assets/images/logo-react-zzaria.svg';
import {AuthContext} from 'contexts/auth';


function Login(){
	const {login} = useContext(AuthContext);

	return(
		<div id="wrap_login">
			<div className="indent">
				<div className="logo">
					<Logo />
				</div>

				<button className="botao ripple" onClick={login}>Entrar com GitHub</button>
			</div>
		</div>
	);
}

export default Login;