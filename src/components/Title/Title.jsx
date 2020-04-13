import React, {Component} from 'react';
import './Title.css';

class Title extends Component {
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
            <div className="maintitle">
                <div className="title">ReacTris</div>
                <div className="logo">
                    <svg width="196" height="43" viewBox="0 0 196 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="155" y="33" width="10" height="10" fill="#8000FF"/>
                        <rect x="155" y="22" width="10" height="10" fill="#8000FF"/>
                        <rect x="144" y="22" width="10" height="10" fill="#8000FF"/>
                        <rect x="144" y="11" width="10" height="10" fill="#8000FF"/>
                        <rect x="113" y="33" width="10" height="10" fill="#4200FF"/>
                        <rect x="124" y="22" width="10" height="10" fill="#4200FF"/>
                        <rect x="113" y="22" width="10" height="10" fill="#4200FF"/>
                        <rect x="124" y="11" width="10" height="10" fill="#4200FF"/>
                        <rect x="51" y="33" width="10" height="10" fill="#FFF393"/>
                        <rect x="62" y="22" width="10" height="10" fill="#FFF393"/>
                        <rect x="51" y="22" width="10" height="10" fill="#FFF393"/>
                        <rect x="62" y="33" width="10" height="10" fill="#FFF393"/>
                        <rect x="93" y="11" width="10" height="10" fill="#00B533"/>
                        <rect x="82" y="33" width="10" height="10" fill="#00B533"/>
                        <rect x="93" y="22" width="10" height="10" fill="#00B533"/>
                        <rect x="93" y="33" width="10" height="10" fill="#00B533"/>
                        <rect x="20" y="33" width="10" height="10" fill="#FF9900"/>
                        <rect x="20" y="11" width="10" height="10" fill="#FF9900"/>
                        <rect x="20" y="22" width="10" height="10" fill="#FF9900"/>
                        <rect x="31" y="33" width="10" height="10" fill="#FF9900"/>
                        <rect x="186" y="33" width="10" height="10" fill="#00CFEB"/>
                        <rect x="186" y="22" width="10" height="10" fill="#00CFEB"/>
                        <rect x="175" y="22" width="10" height="10" fill="#00CFEB"/>
                        <rect x="186" y="11" width="10" height="10" fill="#00CFEB"/>
                        <rect y="22" width="10" height="10" fill="#FF0000"/>
                        <rect width="10" height="10" fill="#FF0000"/>
                        <rect y="11" width="10" height="10" fill="#FF0000"/>
                        <rect y="33" width="10" height="10" fill="#FF0000"/>
                    </svg>
                </div>
            </div>
        );
    }
}

export default Title;