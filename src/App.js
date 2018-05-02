import React, { Component } from 'react';
import LifeCounter from './components/LifeCounter';

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			activeCard: '1',
			player1: 'Andreolle',
			player2: 'Adversário',
			firstToPlay: 'player1'
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
					name={this.state.player2}
					reversible="true"
					activeCard={this.state.activeCard}
					cardID="2"
					card={this.card.bind(this)}>
					</LifeCounter>
				</div>
				<div className="lifecounter-wrapper">
					<LifeCounter 
					name={this.state.player1}
					activeCard={this.state.activeCard}
					cardID="1" 
					card={this.card.bind(this)}>
					</LifeCounter>
				</div>
			</div>
		);
	}
}

export default App;