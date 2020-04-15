import React, {Component} from 'react';
import './Tetromino.css';

class Tetromino extends Component {
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
            <div className="tetromino_area">
                <div className="score_title">Score</div>
                <div className="score_serction">
                    <div className="score">999</div>
                </div>
            </div>
        );
    }
}

export default Tetromino;