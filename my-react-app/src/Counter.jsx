import React, { useState } from "react";

function Counter() {
  const [num, setNum] = useState(0);

  return (
    <div className="flex flex-col items-center shadow-md p-5">
      <h1 className="font-bold text-6xl">{num}</h1>
      <div className="flex gap-8 mt-5">
        <button
          className="rounded-md bg-yellow-400 p-5 w-3xs "
          onClick={() => setNum(num - 1)}
        >
          Decrement
        </button>
        <button
          className="rounded-md bg-red-400 p-5 w-3xs "
          onClick={() => setNum(0)}
        >
          Reset
        </button>
        <button
          className="rounded-md bg-green-400 p-5 w-3xs "
          onClick={() => {
            setNum(num + 1);
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;
