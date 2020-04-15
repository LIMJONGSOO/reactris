import React, {Component} from 'react';
import './Tetromino.css';

class Tetromino extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tetrominoTable: Array.from(Array(4), () => Array.from(Array(2), () => 'empty'))
        };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="tetromino_area">
                <div className="next_title">Next</div>
                <div>
                    {this.state.tetrominoTable.map((tetrominoRow) => (
                        <div>
                            {tetrominoRow.map((tetromino) => (
                                <div className="empty"></div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Tetromino;