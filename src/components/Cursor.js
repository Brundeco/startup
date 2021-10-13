import React from "react";

const Cursor = () => {
    return (
        <svg className="cursor" width="20" height="20" viewBox="0 0 200 200">
            <defs>
                <filter
                    id="filter-1"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                    filterUnits="objectBoundingBox"
                >
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0"
                        numOctaves="5"
                        result="warp"
                    />
                    <feDisplacementMap
                        xChannelSelector="R"
                        yChannelSelector="G"
                        scale="90"
                        in="SourceGraphic"
                        in2="warp"
                    />
                </filter>
            </defs>
            <circle className="cursor__inner" cx="100" cy="100" r="60" />
        </svg>
    );
};

export default Cursor;
