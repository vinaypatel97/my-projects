import React, { Component } from 'react';
import './Carousel.css';
import * as icons from '../DiceGame/Images/index';

const payload = [
    {
        icon: icons['img_1'],
        header: 'Image 1'
    },
    {
        icon: icons.img_2,
        header: 'Image 2'
    },
    {
        icon: icons.img_3,
        header: 'Image 3'
    },
    {
        icon: icons.img_4,
        header: 'Image 4'
    },
    {
        icon: icons['img_1'],
        header: 'Image 5'
    },
    {
        icon: icons.img_2,
        header: 'Image 6'
    },
    {
        icon: icons.img_3,
        header: 'Image 7'
    },
    {
        icon: icons.img_4,
        header: 'Image 8'
    }
];


export default class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            startIndex: 0,
            endIndex: 3,
            content: [],
        }

    }

    componentDidMount() {
        this.setState({
            content: payload,
            startIndex: 0,
            endIndex: Math.min(3, payload.length)
        })
    }

    move = (type) => {
        let isEnd;
        const { startIndex, endIndex, content } = this.state;
        if (type === 'next') {
            isEnd = endIndex === content.length;
            if (!isEnd) {
                this.setState({ startIndex: startIndex + 1, endIndex: endIndex + 1 })
            }
        } else {
            isEnd = startIndex === 0;
            if (!isEnd) {
                this.setState({ startIndex: startIndex - 1, endIndex: endIndex - 1 })
            }
        }
    }

    render() {
        const { content, startIndex, endIndex } = this.state;
        const isStartingIndex = startIndex === 0;
        const isEndingIndex = endIndex === content.length;

        return (
            <div>
                <div>
                    <h1>Carousel</h1>
                </div>
                <div className="dFlex">
                    {
                        !isStartingIndex &&
                        <div onClick={() => this.move('prev')} className="cursorP">
                            Previous
                        </div>
                    }
                    <div className="dFlex">
                        {
                            content.slice(startIndex, endIndex).map((elm, index) => {
                                return (
                                    <div key={`${elm.header}_${index}`}>
                                        <div>
                                            <img src={elm.icon} alt="" />
                                        </div>
                                        <div>
                                            {elm.header}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {
                        !isEndingIndex &&
                        <div onClick={() => this.move('next')} className="cursorP">
                            Next
                        </div>
                    }
                </div>
            </div>
        )
    }
}
