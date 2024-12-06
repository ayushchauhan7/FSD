import React, { useState } from 'react';
import pic from "../image/adi.jpg";
import "./ImageApp.css";

const ImageApp = () => {
    const [width, setWidth] = useState(200);
    const [height, setHeight] = useState(200);
    const [rotation, setRotation] = useState(0);

    return (
        <div className='disp'>
            <div className='img'>
                <img
                    src={pic}
                    alt="Dynamic"
                    style={{
                        width: `${width}px`,
                        height: `${height}px`,
                        transform: `rotate(${rotation}deg)`,
                    }}
                />
            </div>
            <div className='panel'>
                <button onClick={() => setWidth(width + 10)}>Increase Width</button>
                <button onClick={() => setWidth(width - 10)}>Decrease Width</button>
                <button onClick={() => setHeight(height + 10)}>Increase Height</button>
                <button onClick={() => setHeight(height - 10)}>Decrease Height</button>
                <button onClick={() => setRotation(rotation + 15)}>Rotate Clockwise</button>
                <button onClick={() => setRotation(rotation - 15)}>Rotate Anti Clockwise</button>
            </div>
        </div>
    );
};

export default ImageApp;
