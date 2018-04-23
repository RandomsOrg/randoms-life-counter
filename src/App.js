import React, { Component } from 'react';
import LifeCounter from './components/LifeCounter';

class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="lifecounter-wrapper">
					<LifeCounter name="Andreolle" isFirst="true"></LifeCounter>
				</div>
				<div className="lifecounter-wrapper">
					<LifeCounter name="Adversário"></LifeCounter>
				</div>
			</div>
		);
	}
}

export default App;