import React, {Component} from 'react';
import './Tetris.css';

class Tetris extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        const nowTetromino = this.props.nowTetromino.locationList[this.props.nowTetromino.rotationIdx];
        return (
            <div className="tetris_area">
                <div>
                    {this.props.tetrisTable.map((tetrisRow, rowIdx) => (
                        <div key={rowIdx}>
                            {tetrisRow.map((tetris, colIdx) => (
                                <div key={colIdx} className={nowTetromino && nowTetromino.map((location) => location[0]+'-'+location[1]).includes(rowIdx+'-'+colIdx) ? this.props.nowTetromino.type : tetris }></div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Tetris;