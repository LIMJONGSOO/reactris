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
            nowTetromino: {},
            nextTetromino: {},
            testrisTable: Array.from(Array(20), () => Array.from(Array(10), () => 'empty')),
            tetrominoList:[
                {type:'tetromino1', location:[[0,0],[1,0],[2,0],[3,0]]},
                {type:'tetromino2', location:[[1,0],[2,0],[3,0],[3,1]]},
                {type:'tetromino3', location:[[2,0],[2,1],[3,0],[3,1]]},
                {type:'tetromino4', location:[[1,1],[2,1],[3,0],[3,1]]},
                {type:'tetromino5', location:[[1,1],[2,0],[2,1],[3,0]]},
                {type:'tetromino6', location:[[1,0],[2,0],[2,1],[3,1]]},
                {type:'tetromino7', location:[[1,1],[2,0],[2,1],[3,1]]}
            ],
            score: 0
        };

        const newTetromino = Object.assign({},this.state.tetrominoList[~~(Math.random()*7)]);
        newTetromino.location = newTetromino.location.map((location) => [location[0] - 4, location[1] + 4]);
        this.state.nowTetromino = newTetromino;
        const nextTetromino = Object.assign({},this.state.tetrominoList[~~(Math.random()*7)]);
        nextTetromino.location = nextTetromino.location.map((location) => [location[0], location[1]]);
        this.state.nextTetromino = nextTetromino;
    }

    componentDidMount() {
        this.downTetromino();
    }

    componentWillUnmount() {
    }

    downTetromino() {
        setTimeout(() => {
            if(!this.checkTouchBottom()) {
                const downNowTetromino = this.state.nowTetromino;
                downNowTetromino.location = this.state.nowTetromino.location.map((location) => [location[0] + 1, location[1]]);
                this.setState({nowTetromino: downNowTetromino});
            } else {
                if(!this.checkTouchTop()) {
                    const testrisTable = this.state.testrisTable;
                    this.state.nowTetromino.location.forEach((location) => {
                        testrisTable[location[0]][location[1]] = this.state.nowTetromino.type;
                    });
                    const newTetromino = this.state.nextTetromino;
                    newTetromino.location = newTetromino.location.map((location) => [location[0] - 4, location[1] + 4]);
                    const nextTetromino = Object.assign({},this.state.tetrominoList[~~(Math.random()*7)]);
                    nextTetromino.location = nextTetromino.location.map((location) => [location[0], location[1]]);
                    this.setState({nowTetromino: newTetromino, nextTetromino: nextTetromino, testrisTable: testrisTable});
                } else {

                }
            }
            this.downTetromino();
        }, 100);
    }

    checkTouchBottom() {
        return this.state.nowTetromino.location
                .filter((location) => location[0] + 1 >= 0 && (location[0] + 1 === 20 || this.state.testrisTable[location[0] + 1][location[1]] !== 'empty'))
                .length > 0 ?  true : false;
    }

    checkTouchTop() {
        return this.state.nowTetromino.location.filter((location) => location[0] < 0 ).length > 0 ? true : false;
    }

    render() {
        return (
            <div className="board">
                <div className="boardarea">
                    <Title />
                    <Tetris testrisTable={this.state.testrisTable} nowTetromino={this.state.nowTetromino}/>
                    <Score score={this.state.score}/>
                    <Tetromino nextTetromino={this.state.nextTetromino}/>
                    <Operator />
                </div>
            </div>
        );
    }
}

export default Board;