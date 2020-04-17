import React, {Component} from 'react';
import './Board.css';
import Title from '../Title/Title';
import Tetris from '../Tetris/Tetris';
import Score from '../Score/Score';
import Tetromino from '../Tetromino/Tetromino';
import Operator from '../Operator/Operator';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nowTatrominoTable: Array.from(Array(4), () => Array.from(Array(2), () => 'empty')),
            nextTatrominoTable: Array.from(Array(4), () => Array.from(Array(2), () => 'empty')),
            testrisTable: Array.from(Array(20), () => Array.from(Array(10), () => 'empty')),
            tetrominoList:[
                {type:'tetromino1', location:[{x:0, y:0},{x:0, y:1},{x:0, y:2},{x:0, y:3}]},
                {type:'tetromino2', location:[{x:0, y:0},{x:0, y:1},{x:0, y:2},{x:1, y:0}]},
                {type:'tetromino3', location:[{x:0, y:0},{x:0, y:1},{x:1, y:0},{x:1, y:1}]},
                {type:'tetromino4', location:[{x:0, y:0},{x:1, y:0},{x:1, y:1},{x:1, y:2}]},
                {type:'tetromino5', location:[{x:0, y:0},{x:0, y:1},{x:1, y:1},{x:1, y:2}]},
                {type:'tetromino6', location:[{x:0, y:1},{x:0, y:2},{x:1, y:0},{x:1, y:1}]},
                {type:'tetromino7', location:[{x:0, y:1},{x:1, y:0},{x:1, y:1},{x:1, y:2}]}
            ],
            score: 0
        };
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
                    <Tetris testrisTable={this.state.testrisTable} nextTatrominoTable={this.state.nextTatrominoTable}/>
                    <Score score={this.state.score}/>
                    <Tetromino nextTatrominoTable={this.state.nextTatrominoTable}/>
                    <Operator />
                </div>
            </div>
        );
    }
}

export default Board;