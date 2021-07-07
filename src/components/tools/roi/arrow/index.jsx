import React from 'react'
import './index.css'

function Arrow() {
    return (
        <div>
            <svg width="74" height="27" viewBox="0 0 74 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="main-line" d="M1.54694 12.3487C31.5156 26.775 46.6116 24.0953 71.0748 3.81178" stroke="white" strokeWidth="2"/>
                <g id="arrow">
                    <line id="arrow-head" x1="70.6865" y1="3.19786" x2="59.3779" y2="1.40416" stroke="white" strokeWidth="2"/>
                    <line id="arrow-head" x1="71.8377" y1="2.31473" x2="70.5073" y2="14.9729" stroke="white" strokeWidth="2"/>
                </g>
            </svg>
        </div>
    )
}

export default Arrow
