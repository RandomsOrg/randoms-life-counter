import React, { Component } from 'react';

class LifeCounter extends Component {
  render() {
    return (
        <div className="lifecounter">
            <div className="lifecounter__header">
                Você
            </div>
            
            <div className="lifecounter__body">
                <div className="counter">
                    <span className="counter__add">+</span>
                    <div className="counter__display">
                        <i className="fas fa-heart"></i>
                        <span>20</span>
                    </div>

                    <span className="counter__remove">-</span>
                </div>
            </div>
        </div>
    );
  }
}

export default LifeCounter;
