import React, {Component} from 'react';
import './Board.css';
import Title from '../Title/Title';
import Tetris from '../Tetris/Tetris';
import Score from '../Score/Score';
import Tetromino from '../Tetromino/Tetromino';
import Operator from '../Operator/Operator';

export const tetrominoList = [
    {type:'tetromino1', rotationIdx:0, locationList:[[[1,0],[1,1],[1,2],[1,3]], [[3,2],[2,2],[1,2],[0,2]]]},
    {type:'tetromino2', rotationIdx:0, locationList:[[[0,3],[1,1],[1,2],[1,3]], [[0,2],[1,2],[2,2],[2,3]], [[1,1],[1,2],[1,3],[2,1]], [[0,1],[0,2],[1,2],[2,2]]]},
    {type:'tetromino3', rotationIdx:0, locationList:[[[0,1],[0,2],[1,1],[1,2]]]},
    {type:'tetromino4', rotationIdx:0, locationList:[[[0,1],[1,1],[1,2],[1,3]], [[0,2],[0,3],[1,2],[2,2]], [[1,1],[1,2],[1,3],[2,1]], [[0,2],[1,2],[2,1],[2,2]]]},
    {type:'tetromino5', rotationIdx:0, locationList:[[[0,1],[0,2],[1,2],[1,3]], [[-1,3],[0,2],[0,3],[1,2]]]},
    {type:'tetromino6', rotationIdx:0, locationList:[[[0,2],[0,3],[1,1],[1,2]], [[-1,2],[0,2],[0,3],[1,3]]]},
    {type:'tetromino7', rotationIdx:0, locationList:[[[0,2],[1,1],[1,2],[1,3]], [[0,2],[1,2],[1,3],[2,2]], [[1,1],[1,2],[1,3],[2,2]], [[0,2],[1,1],[1,2],[2,2]]]}
];

class Board extends Component {
    constructor(props) {
        super(props);

        const newTetromino = Object.assign({},tetrominoList[~~(Math.random()*7)]);
        newTetromino.locationList = newTetromino.locationList.map((location) => location.map((point) => [point[0] - 2, point[1] + 3]));
        const nextTetromino = Object.assign({},tetrominoList[~~(Math.random()*7)]);
        nextTetromino.locationList = nextTetromino.locationList.map((location) => location.map((point) => [point[0], point[1]]));

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
        document.addEventListener("keydown", this.handleKeyPress, false);
        this.downTetromino();
    }

    componentWillUnmount() {
    }

    moveTetromino(y, x) {
        const moveTetromino = this.state.nowTetromino;
        moveTetromino.locationList = moveTetromino.locationList.map((location) => location.map((point) => [point[0] + y, point[1] + x]));
        this.setState({nowTetromino: moveTetromino});
    }

    downTetromino() {
        setTimeout(() => {
            if(!this.checkTouchBottom()) {
                this.moveTetromino(1, 0); // 아래로 한칸 이동
            } else {
                if(!this.checkTouchTop()) {
                    const testrisTable = this.state.testrisTable;
                    this.state.nowTetromino.locationList[this.state.nowTetromino.rotationIdx].forEach((point) => {
                        testrisTable[point[0]][point[1]] = this.state.nowTetromino.type;
                    });
                    const newTetromino = this.state.nextTetromino;
                    newTetromino.locationList = newTetromino.locationList.map((location) => location.map((point) => [point[0] - 2, point[1] + 3]));
                    const nextTetromino = Object.assign({},tetrominoList[~~(Math.random()*7)]);
                    nextTetromino.locationList = nextTetromino.locationList.map((location) => location.map((point) => [point[0], point[1]]));
                    this.setState({nowTetromino: newTetromino, nextTetromino: nextTetromino, testrisTable: testrisTable});
                } else {

                }
            }
            this.downTetromino();
        }, this.state.speed);
    }

    checkTouchBottom() {
        return this.state.nowTetromino.locationList[this.state.nowTetromino.rotationIdx]
                .filter((location) => location[0] + 1 >= 0 && (location[0] + 1 === this.state.rowCnt || this.state.testrisTable[location[0] + 1][location[1]] !== 'empty'))
                .length > 0 ?  true : false;
    }

    checkTouchTop() {
        return this.state.nowTetromino.locationList[this.state.nowTetromino.rotationIdx]
            .filter((location) => location[0] < 0 ).length > 0 ? true : false;
    }

    checkTouchRight() {
        return this.state.nowTetromino.locationList[this.state.nowTetromino.rotationIdx]
                .filter((location) => location[0] >= 0 && location[1] + 1 >= this.state.colCnt && (location[1] + 1 === this.state.colCnt || this.state.testrisTable[location[0]][location[1] + 1] !== 'empty'))
                .length > 0 ?  true : false;
    }

    checkTouchLeft() {
        return this.state.nowTetromino.locationList[this.state.nowTetromino.rotationIdx]
                .filter((location) => location[0] >= 0 && (location[1] === 0 || this.state.testrisTable[location[0]][location[1] - 1] !== 'empty'))
                .length > 0 ?  true : false;
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
            const targetTetromino = Object.assign({},this.state.nowTetromino);

            while(targetTetromino.locationList[targetTetromino.rotationIdx]
                .filter((location) => location[0] + 1 >= 0 && (location[0] + 1 === this.state.rowCnt || this.state.testrisTable[location[0] + 1][location[1]] !== 'empty'))
                .length === 0) {
                    moveCnt++;
                    targetTetromino.locationList = targetTetromino.locationList.map((location) => location.map((point) => [point[0] + 1, point[1]]));
            }
            this.moveTetromino(moveCnt, 0);
        }
    }

    rotationTetromino = () => {
        
    }

    handleKeyPress = (event) => {
        if (event.keyCode === 37) {
            this.moveLeft();
            event.preventDefault();
        } else if (event.keyCode === 38) {
            this.rotationTetromino();
            event.preventDefault();
        } else if (event.keyCode === 39) {
            this.moveRight();
            event.preventDefault();
        } else if (event.keyCode === 40) {
            this.moveDown();
            event.preventDefault();
        } else if (event.keyCode === 32) {
            this.moveToBottom();
            event.preventDefault();
        }
    }

    render() {
        return (
            <div className="board">
                <div className="boardarea">
                    <Title />
                    <div className="middle_area">
                        <div className="left_area">
                            <Tetris testrisTable={this.state.testrisTable} nowTetromino={this.state.nowTetromino}/>
                        </div>
                        <div  className="right_area">
                            <Score score={this.state.score}/>
                            <Tetromino nextTetromino={this.state.nextTetromino}/>
                        </div>
                    </div>
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