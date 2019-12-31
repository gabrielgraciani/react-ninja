import React, {useState} from 'react';

const App = () => (
	<div style={{display: 'flex', justifyContent:'space-around'}}>
	<CounterClass />
	<CounterFunction />
	</div>
);

class CounterClass extends React.Component{
	state = {
		counter: 0
	};
	render(){
		return(
			<Counter
				counter={this.state.counter}
				increment={() => {
					this.setState((prevState) => ({
						counter: prevState.counter +1
					}))
				}}
				decrement={() =>{
					this.setState((nextState) => ({
						counter: nextState.counter -1
					}))
				}}
			/>
		)
	}
}

function CounterFunction(){
	const [counter, setCounter] = useState(0);
	return(
		<Counter
			counter={counter}
			increment={() => {
				setCounter(c => c + 1);
			}}
			decrement={() =>{
				setCounter(c => c - 1);
			}}
		/>
	)
}

const Counter = ({counter, increment, decrement}) => (
	<div style={{textAlign: 'center'}}>
		<h1>{counter}</h1>
		<button onClick={decrement}>-</button>
		<button onClick={increment}>+</button>
	</div>
);

export default App;

