"use client";

import { useState } from "react";

interface CartProps {
  value?: number;
}

export const CartCounter = ({ value = 0 }) => {
  const [counter, setCounter] = useState(value);
  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex gap-4">
        <button
          className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -1
        </button>
        <button
          className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +1
        </button>
      </div>
    </>
  );
};
