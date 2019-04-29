import React from "react";

import "../styles/spinnerDataLoad.css";

const SpinnerDataLoad = () => {
    return (
        <div className="spinner-wrapper">
            <div className="scaling-squares-spinner">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
            </div>
        </div>
    )
}

export default SpinnerDataLoad;
