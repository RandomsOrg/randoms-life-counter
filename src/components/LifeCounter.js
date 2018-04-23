import React, { Component } from 'react';

class LifeCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            life: 20,
            isActive: true
        }

        this.addLife = this.addLife.bind(this);
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
        this.setState(prevState => ({
            isActive: !prevState.isActive
        }));
    }
    render() {
        return (
            <div className={"lifecounter " + (this.props.isActive ? 'active' : '')}>
                <div className="lifecounter__header">
                    <span className="name">{ this.props.name }</span>
                </div>
                
                <div className="lifecounter__body">
                    <div className="actions-btns">
                        <i className="surrender fas fa-flag"></i>
                        <i className="skip fas fa-share"></i>
                    </div>
                    <div className="counter">
                        <i onClick={this.addLife} className="counter__add fas fa-plus"></i>
                        
                        <div className="counter__display">
                            <i className="fas fa-heart"></i>
                            <span>{ this.state.life }</span>
                            <i className="reset fas fa-sync"></i>
                        </div>

                        <i onClick={this.removeLife} className="counter__remove fas fa-minus"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default LifeCounter;
