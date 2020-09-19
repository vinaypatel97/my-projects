import React, { Component } from 'react';
import RadioSelect from './components/RadioSelect';
import { radioSelectData } from './data/dummyData';

export default class MainHelper extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        return (
            <div>
                <RadioSelect 
                    radioSelectData={radioSelectData}
                />
            </div>
        )
    }
}
