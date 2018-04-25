import React, { Component } from 'react';
import LifeCounter from './components/LifeCounter';

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			activeCard: '1'
		}
	}
	card(id){
		this.setState({
			activeCard: id
		});
	}
	render() {
		return (
			<div className="container">
				<div className="lifecounter-wrapper">
					<LifeCounter 
					name="Adversário"
					activeCard={this.state.activeCard}
					cardID="2"
					card={this.card.bind(this)}
					{...this.state}>
					</LifeCounter>
				</div>
				<div className="lifecounter-wrapper">
					<LifeCounter 
					name="Andreolle"
					isFirst="true"
					activeCard={this.state.activeCard}
					cardID="1" 
					card={this.card.bind(this)}
					{...this.state}>
					</LifeCounter>
				</div>
			</div>
		);
	}
}

export default App;