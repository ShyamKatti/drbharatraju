import React from "react";


export const MobileIcon = ({
    style = {},
    width = '100px',
    height='100px',
    fillColor = '#00626f',
}) => (
    <svg
        height={height}
        width={width}
        fill={fillColor}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        version="1.1"
        viewBox="0 0 151 290"
    >
        <g>
            <path className={fillColor} d="M141 31l0 228 -131 0 0 -228 131 0zm-7 7l-118 0 0 214 118 0 0 -214z"></path>
            <path className={fillColor} d="M45 15c1,0 3,2 3,4 0,2 -2,3 -3,3 -2,0 -4,-1 -4,-3 0,-2 2,-4 4,-4z"></path>
            <path className={fillColor} d="M57 15l37 0c4,0 4,7 0,7l-37 0c-5,0 -5,-7 0,-7z"></path>
            <path className={fillColor} d="M75 263c5,0 8,4 8,8 0,5 -3,8 -8,8 -4,0 -8,-3 -8,-8 0,-4 4,-8 8,-8z"></path>
            <path className={fillColor} d="M17 0l117 0c9,0 17,7 17,17l0 256c0,10 -8,17 -17,17l-117 0c-10,0 -17,-7 -17,-17l0 -256c0,-10 7,-17 17,-17zm117 7l-117 0c-6,0 -10,4 -10,10l0 256c0,6 4,10 10,10l117 0c6,0 10,-4 10,-10l0 -256c0,-6 -4,-10 -10,-10z"></path>
        </g>
    </svg>
);