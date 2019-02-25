import React, { useState, useEffect, useRef } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(null);

  useInterval(() => {
    setCount(count + 1);
  }, delay);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setDelay(1000)}>开始</button>
      <button onClick={() => setDelay(null)}>暂停</button>
    </>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
export default Counter;
