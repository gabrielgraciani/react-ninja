import React from 'react';
import {connect} from 'react-redux';
import {openRegisterVideo} from '../redux-flow/reducers/ui/action-creators'

const Header = ({onOpenRegisterVideo}) => (
	<header>
		<h1 className="title-header">ReactFlix</h1>
		<button className="button-header" onClick={onOpenRegisterVideo}>Cadastrar vídeo</button>
	</header>
);

const mapDispatchToProps = (dispatch) => ({
	onOpenRegisterVideo: () => dispatch(openRegisterVideo())
});

export default connect(null, mapDispatchToProps)(Header);