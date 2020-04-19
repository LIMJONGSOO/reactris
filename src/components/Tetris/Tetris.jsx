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
        return (
            <div className="tetris_area">
                <div>
                    {this.props.testrisTable.map((tetrisRow, rowIdx) => (
                        <div>
                            {tetrisRow.map((tetris, colIdx) => (
                                <>
                                    <div className={this.props.nowTetromino.location && this.props.nowTetromino.location.map((location) => location[0]+'-'+location[1]).includes(rowIdx+'-'+colIdx) ? this.props.nowTetromino.type : tetris }></div>
                                </>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Tetris;