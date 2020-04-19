import React, {Component} from 'react';
import './Board.css';
import Title from '../Title/Title';
import Tetris from '../Tetris/Tetris';
import Score from '../Score/Score';
import Tetromino from '../Tetromino/Tetromino';
import Operator from '../Operator/Operator';

export const tetrominoList = [
    {type:'tetromino1', location:[[0,0],[1,0],[2,0],[3,0]]},
    {type:'tetromino2', location:[[1,0],[2,0],[3,0],[3,1]]},
    {type:'tetromino3', location:[[2,0],[2,1],[3,0],[3,1]]},
    {type:'tetromino4', location:[[1,1],[2,1],[3,0],[3,1]]},
    {type:'tetromino5', location:[[1,1],[2,0],[2,1],[3,0]]},
    {type:'tetromino6', location:[[1,0],[2,0],[2,1],[3,1]]},
    {type:'tetromino7', location:[[1,1],[2,0],[2,1],[3,1]]}
];

class Board extends Component {
    constructor(props) {
        super(props);

        const newTetromino = Object.assign({},tetrominoList[~~(Math.random()*7)]);
        newTetromino.location = newTetromino.location.map((location) => [location[0] - 4, location[1] + 4]);
        const nextTetromino = Object.assign({},tetrominoList[~~(Math.random()*7)]);
        nextTetromino.location = nextTetromino.location.map((location) => [location[0], location[1]]);

        this.state = {
            rowCnt: 20,
            colCnt: 10,
            speed: 500,
            nowTetromino: newTetromino,
            nextTetromino: nextTetromino,
            testrisTable: Array.from(Array(20), () => Array.from(Array(10), () => 'empty')),
            score: 0
        };
    }

    componentDidMount() {
        this.downTetromino();
    }

    componentWillUnmount() {
    }

    downTetromino() {
        setTimeout(() => {
            if(!this.checkTouchBottom()) {
                this.moveTetromino(1, 0); // 아래로 한칸 이동
            } else {
                if(!this.checkTouchTop()) {
                    const testrisTable = this.state.testrisTable;
                    this.state.nowTetromino.location.forEach((location) => {
                        testrisTable[location[0]][location[1]] = this.state.nowTetromino.type;
                    });
                    const newTetromino = this.state.nextTetromino;
                    newTetromino.location = newTetromino.location.map((location) => [location[0] - 4, location[1] + 4]);
                    const nextTetromino = Object.assign({},tetrominoList[~~(Math.random()*7)]);
                    nextTetromino.location = nextTetromino.location.map((location) => [location[0], location[1]]);
                    this.setState({nowTetromino: newTetromino, nextTetromino: nextTetromino, testrisTable: testrisTable});
                } else {

                }
            }
            this.downTetromino();
        }, this.state.speed);
    }

    checkTouchBottom() {
        return this.state.nowTetromino.location
                .filter((location) => location[0] + 1 >= 0 && (location[0] + 1 === this.state.rowCnt || this.state.testrisTable[location[0] + 1][location[1]] !== 'empty'))
                .length > 0 ?  true : false;
    }

    checkTouchTop() {
        return this.state.nowTetromino.location.filter((location) => location[0] < 0 ).length > 0 ? true : false;
    }

    checkTouchRight() {
        return this.state.nowTetromino.location
                .filter((location) => location[0] + 1 >= 0 && location[1] + 1 >= this.state.colCnt && (location[1] + 1 === this.state.colCnt || this.state.testrisTable[location[0]][location[1] + 1] !== 'empty'))
                .length > 0 ?  true : false;
    }

    checkTouchLeft() {
        return this.state.nowTetromino.location
                .filter((location) => location[0] + 1 >= 0 && (location[1] === 0 || this.state.testrisTable[location[0]][location[1] - 1] !== 'empty'))
                .length > 0 ?  true : false;
    }

    moveTetromino(y, x) {
        const moveTetromino = this.state.nowTetromino;
        moveTetromino.location = moveTetromino.location.map((location) => [location[0] + y, location[1] + x]);
        this.setState({nowTetromino: moveTetromino});
    }

    moveRight = () => {
        if (!this.checkTouchRight()) {
            this.moveTetromino(0, 1);
        }
    }

    moveLeft = () => {
        if (!this.checkTouchLeft()) {
            this.moveTetromino(0, -1);
        }
    }

    moveDown = () => {
        if(!this.checkTouchBottom()) {
            this.moveTetromino(1, 0);
        }
    }

    moveToBottom = () => {
        if(!this.checkTouchBottom()) {
            let moveCnt = 0;
            const moveTetromino = Object.assign({},this.state.nowTetromino);

            while(moveTetromino.location
                .filter((location) => location[0] + 1 >= 0 && (location[0] + 1 === this.state.rowCnt || this.state.testrisTable[location[0] + 1][location[1]] !== 'empty'))
                .length === 0) {
                    moveCnt++;
                    moveTetromino.location = moveTetromino.location.map((location) => [location[0] + 1, location[1]]);
            }
            this.moveTetromino(moveCnt, 0);
        }
    }

    rotationTetromino = () => {
        
    }

    render() {
        return (
            <div className="board">
                <div className="boardarea">
                    <Title />
                    <Tetris testrisTable={this.state.testrisTable} nowTetromino={this.state.nowTetromino}/>
                    <Score score={this.state.score}/>
                    <Tetromino nextTetromino={this.state.nextTetromino}/>
                    <Operator 
                        moveRight={this.moveRight} 
                        moveLeft={this.moveLeft} 
                        moveDown={this.moveDown} 
                        moveToBottom={this.moveToBottom}
                        rotationTetromino={this.rotationTetromino}
                    />
                </div>
            </div>
        );
    }
}

export default Board;