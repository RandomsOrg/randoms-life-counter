import React, { Component } from 'react';
import defeatImg from '../images/shattered-sword.svg';
import winningImg from '../images/crown.svg';

class LifeCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            life: 20,
            defeated: false
        }

        this.addLife = this.addLife.bind(this);
        this.surrender = this.surrender.bind(this);
        this.removeLife = this.removeLife.bind(this);
        this.activeTurn = this.activeTurn.bind(this);
    }
    addLife() {
        this.setState(prevState => ({
            life: prevState.life+1
        }));
    }
    removeLife() {
        this.setState(prevState => ({
            life: prevState.life-1
        }));
    }
    activeTurn() {
        const _props = this.props;
        _props.card(_props.cardID)
    }
    getInitialState = () => {
        const initialState = {
           life: 20
        };
        return initialState;
    }
    resetLife = () => {
        this.setState(this.getInitialState());
    }
    surrender = () => {
        this.setState({
            defeated: true
        });
    }
    rotate = (e) => {
        e.target.closest('.lifecounter').classList.toggle("rotate");
    }
    componentWillUpdate(nextProps, nextState) {
        if(nextState.life <= 0) {
            nextState.defeated = true
        }
    }
    
    render() {
        return (
            <div className={"lifecounter " + (this.props.activeCard !== this.props.cardID ? 'active' : '') + (this.props.reversible ? ' rotate' : '') }>
                <div className="lifecounter__header">
                    <i className="fas fa-redo-alt btn-rotate" onClick={this.rotate}></i>
                    <span className="name">{ this.props.name }</span>
                </div>
                
                <div className="lifecounter__body">
                    <div className="actions-btns">
                        <i onClick={this.surrender} className="surrender fas fa-flag"></i>
                        <i onClick={this.activeTurn} className="skip fas fa-share"></i>
                    </div>
                    <div className="counter">
                        <i onClick={this.addLife} className="counter__add fas fa-plus"></i>
                        
                        <div className="counter__display">
                            <i className="fas fa-heart"></i>
                            <span>{ this.state.life }</span>
                            <i onClick={this.resetLife} className="reset fas fa-sync"></i>
                        </div>

                        <i onClick={this.removeLife} className="counter__remove fas fa-minus"></i>
                    </div>
                </div>

                <div className={"defeat-dialog " + (this.state.defeated ? 'active': '')}>
                    <div className="content">
                        <div className="img-container">
                            <img src={ defeatImg } alt="Defeated"/>
                        </div>
                        <h2>DERROTA</h2>
                    </div>
                </div>

                <div className={"victory-dialog "}>
                    <div className="content">
                        <div className="img-container">
                            <img src={ winningImg } alt="Defeated"/>
                        </div>
                        <h2>VITÓRIA</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default LifeCounter;
