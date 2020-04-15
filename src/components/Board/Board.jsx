import React, {Component} from 'react';
import './Board.css';
import Title from '../Title/Title';
import Tetris from '../Tetris/Tetris';
import Score from '../Score/Score';

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
                    <Tetris />
                    <Score />
                </div>
            </div>
        );
    }
}

export default Board;