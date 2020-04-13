import React, {Component} from 'react';
import './Board.css';
import Title from '../Title/Title'

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="board">
                <div className="boardarea">
                    <Title />
                </div>
            </div>
        );
    }
}

export default Board;