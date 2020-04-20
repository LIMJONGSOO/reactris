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

        const [newTetromino, nextTetromino] = this.changeTetromino();

        this.state = {
            alive: true,
            rowCnt: 20,
            colCnt: 10,
            speed: 500,
            nowTetromino: newTetromino,
            nextTetromino: nextTetromino,
            tetrisTable: Array.from(Array(20), () => Array.from(Array(10), () => 'empty')),
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
        const moveTetromino = Object.assign({},this.state.nowTetromino);
        moveTetromino.locationList = moveTetromino.locationList.map((location) => location.map((point) => [point[0] + y, point[1] + x]));
        return moveTetromino;
    }

    changeTetromino() {
        const newTetromino = this.state ? this.state.nextTetromino : Object.assign({},tetrominoList[~~(Math.random()*7)]);
        newTetromino.locationList = newTetromino.locationList.map((location) => location.map((point) => [point[0] - 2, point[1] + 3]));
        const nextTetromino = Object.assign({},tetrominoList[~~(Math.random()*7)]);
        nextTetromino.locationList = nextTetromino.locationList.map((location) => location.map((point) => [point[0], point[1]]));
        
        return [newTetromino, nextTetromino];
    }

    downTetromino() {
        setTimeout(() => {
            if(!this.checkTouchBottom()) {
                this.setState({nowTetromino: this.moveTetromino(1, 0)}); // 아래로 한칸 이동
            } else {
                if(!this.checkTouchTop()) {
                    const tetrisTable = this.state.tetrisTable;
                    this.state.nowTetromino.locationList[this.state.nowTetromino.rotationIdx].forEach((point) => {
                        tetrisTable[point[0]][point[1]] = this.state.nowTetromino.type;
                    });
                    const [plusScore, newTetrisTable] = this.calculatePoint(tetrisTable);
                    const [newTetromino, nextTetromino] = this.changeTetromino();
                    this.setState({nowTetromino: newTetromino, nextTetromino: nextTetromino, tetrisTable: newTetrisTable, score: this.state.score + plusScore});
                } else {
                    this.setState({alive: false});
                    alert("Game Over! Your Score is " + this.state.score);
                }
            }
            if(this.state.alive) {
                this.downTetromino();
            }
        }, this.state.speed);
    }

    checkTouchBottom() {
        return this.state.nowTetromino.locationList[this.state.nowTetromino.rotationIdx]
                .filter((point) => point[0] + 1 >= 0 && (point[0] + 1 === this.state.rowCnt || this.state.tetrisTable[point[0] + 1][point[1]] !== 'empty'))
                .length > 0 ?  true : false;
    }

    checkTouchTop() {
        return this.state.nowTetromino.locationList[this.state.nowTetromino.rotationIdx]
                .filter((point) => point[0] < 0 ).length > 0 ? true : false;
    }

    checkTouchRight() {
        return this.state.nowTetromino.locationList[this.state.nowTetromino.rotationIdx]
                .filter((point) => point[0] >= 0 && point[1] + 1 >= this.state.colCnt && (point[1] + 1 === this.state.colCnt || this.state.tetrisTable[point[0]][point[1] + 1] !== 'empty'))
                .length > 0 ?  true : false;
    }

    checkTouchLeft() {
        return this.state.nowTetromino.locationList[this.state.nowTetromino.rotationIdx]
                .filter((point) => point[0] >= 0 && (point[1] === 0 || this.state.tetrisTable[point[0]][point[1] - 1] !== 'empty'))
                .length > 0 ?  true : false;
    }

    moveRight = () => {
        if (!this.checkTouchRight()) {
            this.setState({nowTetromino: this.moveTetromino(0, 1)});
        }
    }

    moveLeft = () => {
        if (!this.checkTouchLeft()) {
            this.setState({nowTetromino: this.moveTetromino(0, -1)});
        }
    }

    moveDown = () => {
        if(!this.checkTouchBottom()) {
            this.setState({nowTetromino: this.moveTetromino(1, 0)});
        }
    }

    moveToBottom = () => {
        if(!this.checkTouchBottom()) {
            let moveCnt = 0;
            const targetTetromino = Object.assign({},this.state.nowTetromino);

            while(targetTetromino.locationList[targetTetromino.rotationIdx]
                    .filter((point) => point[0] + 1 >= 0 && (point[0] + 1 === this.state.rowCnt || this.state.tetrisTable[point[0] + 1][point[1]] !== 'empty'))
                    .length === 0) {
                    moveCnt++;
                    targetTetromino.locationList = targetTetromino.locationList.map((location) => location.map((point) => [point[0] + 1, point[1]]));
            }
            const moveTetromino = this.moveTetromino(moveCnt, 0);
            const tetrisTable = this.state.tetrisTable;
            moveTetromino.locationList[moveTetromino.rotationIdx].forEach((point) => {
                if(point[0] >= 0) {
                    tetrisTable[point[0]][point[1]] = moveTetromino.type;
                }
            });
            const [plusScore, newTetrisTable] = this.calculatePoint(tetrisTable);
            const [newTetromino, nextTetromino] = this.changeTetromino();
            this.setState({nowTetromino: newTetromino, nextTetromino: nextTetromino, tetrisTable: newTetrisTable, score: this.state.score + plusScore});
        }
    }

    rotationTetromino = () => {
        const rotateTetromino = Object.assign({},this.state.nowTetromino);
        rotateTetromino.rotationIdx = (rotateTetromino.rotationIdx + 1) % rotateTetromino.locationList.length;
        
        if (rotateTetromino.locationList[rotateTetromino.rotationIdx]
            .filter((point) => point[0] >= 20 ||point[1] < 0 || point[1] >= 10 || (point[0] >= 0 && this.state.tetrisTable[point[0]][point[1]] !== 'empty'))
            .length === 0) {
                this.setState({nowTetromino: rotateTetromino});
        }
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

    calculatePoint(tetrisTable) {
        let plusScore = 0;
        const fullRowList = [];
        
        tetrisTable.forEach((location, rowIdx) => {
            if(location.filter((point) => point === 'empty').length === 0) {
                fullRowList.push(rowIdx);
            } 
        });
        if(fullRowList.length > 0) {
            plusScore = fullRowList.length === 1 ? 100 : fullRowList.length === 2 ? 300 : fullRowList.length === 3 ? 600 : fullRowList.length === 4 ? 1000 : 0;
            fullRowList.forEach((rowIdx) => {
                tetrisTable.splice(rowIdx, 1);
            });
            tetrisTable.unshift(...Array.from(Array(fullRowList.length), () => Array.from(Array(10), () => 'empty')));
        }
        return [plusScore, tetrisTable];
    }

    render() {
        return (
            <div className="board">
                <div className="boardarea">
                    <Title />
                    <div className="middle_area">
                        <div className="left_area">
                            <Tetris tetrisTable={this.state.tetrisTable} nowTetromino={this.state.nowTetromino}/>
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