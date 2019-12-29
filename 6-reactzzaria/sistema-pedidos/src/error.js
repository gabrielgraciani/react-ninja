import {Component} from 'react';

class ErrorBoundary extends Component{
	state = {hasError: false};
	static getDerivedStateFromError(){
		return {hasError: true}
	}
	render(){
		return this.props.children(this.state.hasError)
	}
}

export default ErrorBoundary;