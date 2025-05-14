import { useEffect, useState } from "react";

/*
Build a React component
    - A grid of 16 squares (4x4).
    - A countdown from 10 to 0 that auto-decrements and disappears at 0 inside each square.
    - Clicking a square restarts its counter.
    - A button to add new countdowns (multiple countdowns possible).
    - Clicking a countdown pauses it individually.
    - Optimize the implementation.
    - Complex React state management and optimization.
*/

export default function App2() {
  const [totalSquares, setTotalSquares] = useState(16);
  const [squares, setSquares] = useState<number[]>([]);

  const addCounter = () => {
    setTotalSquares((prev) => prev + 1);
  };

  const buildSquares = () => {
    const s = [];
    for (let i = 1; i <= totalSquares; i++) {
      s.push(i);
    }
    setSquares(s);
  };

  useEffect(() => {
    buildSquares();
  }, [totalSquares]);

  return (
    <div>
      <h1>Grids</h1>
      <button
        onClick={addCounter}
        style={{ cursor: "pointer", marginBottom: 10 }}
      >
        Add Counter
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          maxWidth: "450px",
        }}
      >
        {squares.map((square) => {
          return <Square key={square} />;
        })}
      </div>
    </div>
  );
}

const INITIAL_COUNT = 10;

function Square() {
  const [count, setCount] = useState(INITIAL_COUNT);
  const [stopCounter, setStopCounter] = useState(false);

  const handleSquareClick = () => {
    if (count === 0) {
      setCount(INITIAL_COUNT);
    } else {
      setStopCounter(!stopCounter);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    if (count === 0 || stopCounter) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [count, stopCounter]);

  return (
    <div
      style={{
        border: "1px solid black",
        width: "100px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={handleSquareClick}
    >
      {count > 0 && <h1>{count}</h1>}
    </div>
  );
}
