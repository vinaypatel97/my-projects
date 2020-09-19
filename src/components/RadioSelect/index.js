import React, { Component } from 'react'

export default class RadioSelect extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedOption: -1,
        }
    }

    changeHandler = (e, index) => {
        this.setState({ selectedOption: index });
    }

    render() {
        const { radioSelectData } = this.props;
        return (
            <div>
                {
                    radioSelectData.map((elm, index) => {
                        const returnElm = (
                            <div key={`radio_button_${index}`}>
                                <input type="radio" name="radioBtn" onChange={(event, index) => this.changeHandler(event, index)} />
                                <label>{elm}</label>
                            </div>
                        )
                        return returnElm;
                    })
                }
                

            </div>
        )
    }
}
