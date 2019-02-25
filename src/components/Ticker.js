import React, { useState, useEffect } from "react";
let interval = null;
function Ticker(props) {
    const [ticker, setTickers] = useState(0);
    const reset = () => {
        setTickers(0);
        window.clearInterval(interval);
    }
    const tick = () => {
        reset();
        interval = window.setInterval(() => {
            console.log("111111111111111", ticker);
            if (ticker < props.times) {
                setTickers(ticker + 1);
            }
        }, 1000);
    }
    return (
        <div>
            <span style={{ fontSize: 100 }}>{ticker}</span>
            <button onClick={tick}>Tick!</button>
            {/* <button onClick={reset}>Reset</button> */}
        </div>
    );
}

export default Ticker;