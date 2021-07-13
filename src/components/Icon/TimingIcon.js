import React from "react";


export const TimingIcon = ({
    style = {},
    width = '100px',
    height = '100px',
    fillColor = '#00626f'
}) => (
    <svg
        height={height}
        width={width}
        fill={fillColor}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100"
        xmlSpace="preserve">
            <path d="M50,7C26.29,7,7,26.29,7,50s19.29,43,43,43s43-19.29,43-43S73.71,7,50,7z M50,90c-22.056,0-40-17.944-40-40s17.944-40,40-40  s40,17.944,40,40S72.056,90,50,90z"></path><path d="M51,45.101V18.25h-2v26.851c-1.61,0.327-2.935,1.43-3.578,2.899H24.25v4h21.172c0.772,1.765,2.529,3,4.578,3  c2.762,0,5-2.238,5-5C55,47.581,53.282,45.564,51,45.101z"></path>
    </svg>
)