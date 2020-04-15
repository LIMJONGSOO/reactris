import React, {Component} from 'react';
import './Tetris.css';

class Tetris extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testrisTable: Array.from(Array(20), () => Array.from(Array(10), () => 'empty'))
        };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        console.log(this.state.testrisTable);
        return (
            <div className="tetris-area">
                <div>
                    {this.state.testrisTable.map((tetrisRow) => (
                        <div>
                            {tetrisRow.map((tetris) => (
                                <div className="empty"></div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Tetris;