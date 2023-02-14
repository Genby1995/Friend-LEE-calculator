import React from "react";

function Button(props) {
    const status = props.status;
    const buttonText = props.text;

    return (
        <button
            disabled={status == "loading"}
            className="button">
            {status == "waiting" 
            ? <span className="spinner"></span>
            : buttonText}
        </button>
    );
}

export default Button;