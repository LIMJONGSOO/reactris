import React, {Component} from 'react';
import './Score.css';

class Score extends Component {
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
            <div className="score-area">
                <div className="score-title">Score</div>
                <div className="score-serction">
                    <div className="score">999</div>
                </div>
            </div>
        );
    }
}

export default Score;