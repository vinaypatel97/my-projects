import React, { Component } from 'react';
import DiceSection from './diceSection';
import './main.css';

export default class DiceGame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: 'Not Decided Yet',
            diceNumber1: null,
            diceNumber2: null,
            disabled: false
        }
    }

    updateDice = (player) => {
        const { disabled, diceNumber1, diceNumber2 } = this.state;
        if (!disabled) {
            if (player === 1 && !diceNumber1) {
                this.setState({ diceNumber1: Math.floor(Math.random() * 6) + 1 });
            } else if (player === 2 && !diceNumber2){
                this.setState({ diceNumber2: Math.floor(Math.random() * 6) + 1 });
            }

            setTimeout(() => {
                this.setState({ result: this.getResult() });
            }, 200);
        }
    }

    getResult = () => {
        const { diceNumber1, diceNumber2 } = this.state;
        if (diceNumber1 && diceNumber2) {
            this.setState({ disabled: true });
            if (diceNumber1 > diceNumber2) {
                return 'HAHAHA!!! Vinay Won';
            } else if (diceNumber1 < diceNumber2) {
                return 'HEHEHE!!! Alok Won';
            } else {
                return 'HAHAHA!!! Tie Between both of you';
            }
        }
    }

    reset = () => {
        this.setState({
            result: 'Not Decided Yet',
            diceNumber1: null,
            diceNumber2: null,
            disabled: false
        })
    }

    render() {

        const { diceNumber1, diceNumber2, disabled, result } = this.state;
        return (
            <div className="mainBody">
                <div>
                    <div className="header">
                        {result}
                    </div>
                </div>
                {
                    disabled &&
                    <div className="resetWrapper">
                        <div className="btn" onClick={(e) => this.reset(e)}>
                            Reset Game
                        </div>
                    </div>
                }
                <div className="mainContainer">
                    <div className="leftPane">
                        <DiceSection
                            playerName={'Vinay'}
                            diceNumber={diceNumber1}
                            player={1}
                            updateDice={this.updateDice}
                        />
                    </div>
                    <div className="rightPane">
                        <DiceSection
                            playerName={'Alok'}
                            diceNumber={diceNumber2}
                            player={2}
                            updateDice={this.updateDice}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
