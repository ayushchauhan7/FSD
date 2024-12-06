import React, {useState} from "react";
import pic from "../images/react.png";
import "./ImageApp.css";
const ImageApp = () => {
    const [width, setWidth] = useState(200);
    const [heigth, setHeight] = useState(200);
    const [rotation, setRotation] = useState(0);
    return (
        <div className="disp">
            <div className="img">
                <img src={pic} style={{width: width, height: height, transform: `rotate(${rotation}deg`,}}/>
            </div>
        </div>
}