import React, {Component} from 'react';
import './Tetromino.css';

class Tetromino extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tetrominoTable: Array.from(Array(2), () => Array.from(Array(4), () => 'empty'))
        };
    }

    componentDidMount() {
        console.log(this.props.nextTetromino);
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="tetromino_area">
                <div className="next_title">Next</div>
                <div>
                    {this.state.tetrominoTable.map((tetrominoRow, rowIdx) => (
                        <div>
                            {tetrominoRow.map((tetromino, colIdx) => (
                                <div className={this.props.nextTetromino.location && this.props.nextTetromino.location.map((location) => location[0]+'-'+location[1]).includes(rowIdx+'-'+colIdx) ? this.props.nextTetromino.type : tetromino }></div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Tetromino;