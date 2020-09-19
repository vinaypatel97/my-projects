import React, { Component } from 'react';
import * as icons from './Images/index';


export default class DiceSection extends Component {
    render() {
        const { playerName, diceNumber, updateDice, player } = this.props;
        return (
            <div className="diceSection">
                <div className="playerName">
                    {playerName}
                </div>
                <div className="imgWrapper">
                    {diceNumber ? <img className="imgStyle" src={icons[`img_${diceNumber}`]} alt="Img Not Found" /> : <img className="imgStyle" src={icons['smiley']} alt="Img Not Found" />}
                </div>
                <div className="resetWrapper">
                    <div className="btn" onClick={() => updateDice(player)}>
                        Roll Me
                    </div>
                </div>
            </div>
        )
    }
}
