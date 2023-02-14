import React, { useState } from "react";

function Input(props) {
    const status = props.status;
    const unit = props.unit;
    const min = props.min;
    const max = props.max;
    const value = props.value;
    const changeHandler = props.changeHandler
    const progress = (value - min) / (max - min)
    const secondInputValue = props.secondInputValue;

    const [mainValue, setMainValue] = useState(value)

    const handleChange = (e) => {
        changeHandler(e.target.value);
        setMainValue(e.target.value)
    }
    const heandleMainInputChange = (e) => {
        setMainValue(e.target.value);
    }
    const heandleMainInputBlur = (e) => {
        if (e.target.value > max) {
            setMainValue(max);
            changeHandler(max); 
        }
        else if (e.target.value < min) {
            setMainValue(min);
            changeHandler(min); 
        }
        else changeHandler(e.target.value);
    } 

    return (
        <div className="slider">
            <input
                className="slider__main-input"
                value={mainValue}
                onChange={heandleMainInputChange}
                onBlur={heandleMainInputBlur}
                type="text" />
            <input className="slider__second-input" type="text" value={secondInputValue} />
            <span className="slider__unit"> {unit} </span>
            <input className="slider__range" value={value} onChange={handleChange} type="range" />
            <span className="slider__progress-line" style={{ width: `calc((100% - 2rem)*${progress})`, maxWidth: "100%" }} />
        </div>
    );
}

export default Input;