import React, {Component} from 'react';
import './Operator.css';

class Operator extends Component {
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
            <div className="operator_area">
                <div className="space_button" onClick={this.props.moveToBottom}>
                    <svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                        <circle cx="36.5" cy="32.5" r="32.5" fill="#C4C4C4"/>
                        </g>
                        <path d="M21.9902 37V28.4688H24.3984C25.1406 28.4688 25.7969 28.6328 26.3672 28.9609C26.9375 29.2891 27.377 29.7559 27.6855 30.3613C27.998 30.9668 28.1562 31.6621 28.1602 32.4473V32.9922C28.1602 33.7969 28.0039 34.502 27.6914 35.1074C27.3828 35.7129 26.9395 36.1777 26.3613 36.502C25.7871 36.8262 25.1172 36.9922 24.3516 37H21.9902ZM23.1152 29.3945V36.0801H24.2988C25.166 36.0801 25.8398 35.8105 26.3203 35.2715C26.8047 34.7324 27.0469 33.9648 27.0469 32.9688V32.4707C27.0469 31.502 26.8184 30.75 26.3613 30.2148C25.9082 29.6758 25.2637 29.4023 24.4277 29.3945H23.1152ZM29.4082 33.7715C29.4082 33.1504 29.5293 32.5918 29.7715 32.0957C30.0176 31.5996 30.3574 31.2168 30.791 30.9473C31.2285 30.6777 31.7266 30.543 32.2852 30.543C33.1484 30.543 33.8457 30.8418 34.377 31.4395C34.9121 32.0371 35.1797 32.832 35.1797 33.8242V33.9004C35.1797 34.5176 35.0605 35.0723 34.8223 35.5645C34.5879 36.0527 34.25 36.4336 33.8086 36.707C33.3711 36.9805 32.8672 37.1172 32.2969 37.1172C31.4375 37.1172 30.7402 36.8184 30.2051 36.2207C29.6738 35.623 29.4082 34.832 29.4082 33.8477V33.7715ZM30.498 33.9004C30.498 34.6035 30.6602 35.168 30.9844 35.5938C31.3125 36.0195 31.75 36.2324 32.2969 36.2324C32.8477 36.2324 33.2852 36.0176 33.6094 35.5879C33.9336 35.1543 34.0957 34.5488 34.0957 33.7715C34.0957 33.0762 33.9297 32.5137 33.5977 32.084C33.2695 31.6504 32.832 31.4336 32.2852 31.4336C31.75 31.4336 31.3184 31.6465 30.9902 32.0723C30.6621 32.498 30.498 33.1074 30.498 33.9004ZM42.1523 35.5059L43.3711 30.6602H44.4551L42.6094 37H41.7305L40.1895 32.1953L38.6895 37H37.8105L35.9707 30.6602H37.0488L38.2969 35.4062L39.7734 30.6602H40.6465L42.1523 35.5059ZM46.5879 30.6602L46.623 31.457C47.1074 30.8477 47.7402 30.543 48.5215 30.543C49.8613 30.543 50.5371 31.2988 50.5488 32.8105V37H49.4648V32.8047C49.4609 32.3477 49.3555 32.0098 49.1484 31.791C48.9453 31.5723 48.627 31.4629 48.1934 31.4629C47.8418 31.4629 47.5332 31.5566 47.2676 31.7441C47.002 31.9316 46.7949 32.1777 46.6465 32.4824V37H45.5625V30.6602H46.5879Z" fill="black"/>
                        <defs>
                        <filter id="filter0_d" x="0" y="0" width="73" height="73" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                        </defs>
                    </svg>
                </div>
                <div className="operator_right_area">
                    <div className="up_button">
                        <svg width="58" height="38" viewBox="0 0 58 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d)">
                            <rect x="4" width="50" height="30" fill="#C4C4C4"/>
                            </g>
                            <line x1="21.6464" y1="14.7175" x2="28.7175" y2="7.64642" stroke="black"/>
                            <line x1="35.7175" y1="15.4246" x2="28.6464" y2="8.35353" stroke="black"/>
                            <defs>
                            <filter id="filter0_d" x="0" y="0" width="58" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
                    </div>
                    <div className="operator_down_area">
                        <div className="left_button" onClick={this.props.moveLeft}>
                            <svg width="58" height="38" viewBox="0 0 58 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d)">
                                <rect x="4" width="50" height="30" fill="#C4C4C4"/>
                                </g>
                                <line x1="21.6464" y1="15.7175" x2="28.7175" y2="8.64642" stroke="black"/>
                                <line x1="28.7175" y1="22.4246" x2="21.6464" y2="15.3535" stroke="black"/>
                                <defs>
                                <filter id="filter0_d" x="0" y="0" width="58" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                        </div>
                        <div className="down_button" onClick={this.props.moveDown}>
                            <svg width="58" height="38" viewBox="0 0 58 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d)">
                                <rect x="4" width="50" height="30" fill="#C4C4C4"/>
                                </g>
                                <line x1="28.6464" y1="21.7175" x2="35.7175" y2="14.6464" stroke="black"/>
                                <line x1="28.7175" y1="22.4246" x2="21.6464" y2="15.3535" stroke="black"/>
                                <defs>
                                <filter id="filter0_d" x="0" y="0" width="58" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                        </div>
                        <div className="right_button" onClick={this.props.moveRight}>
                            <svg width="58" height="38" viewBox="0 0 58 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d)">
                                <rect x="4" width="50" height="30" fill="#C4C4C4"/>
                                </g>
                                <line x1="28.6464" y1="21.7175" x2="35.7175" y2="14.6464" stroke="black"/>
                                <line x1="35.7175" y1="15.4246" x2="28.6465" y2="8.35353" stroke="black"/>
                                <defs>
                                <filter id="filter0_d" x="0" y="0" width="58" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Operator;