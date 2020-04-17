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
            <div className="score_area">
                <div className="score_title">Score</div>
                <div className="score_serction">
                    <div className="score">{this.props.score}</div>
                </div>
            </div>
        );
    }
}

export default Score;