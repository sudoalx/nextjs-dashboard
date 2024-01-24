"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import {
  decreaseCount,
  increaseCount,
  initCounterState,
} from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface CartProps {
  value?: number;
}

// Generated by https://quicktype.io
export interface CounterResponse {
  method: string;
  count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch("/api/counter").then((res) => res.json());

  console.log({ data });
  return data;
};

export const CartCounter = ({ value = 0 }: CartProps) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, [dispatch, value]);

  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(initCounterState(count)));
  }, [dispatch]);

  return (
    <div className="text-center animate__animated animate__fadeIn">
      <span className="text-9xl">{count}</span>
      <div className="flex gap-4 justify-center">
        <button
          className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          onClick={() => {
            dispatch(decreaseCount());
          }}
        >
          -1
        </button>
        <button
          className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          onClick={() => {
            dispatch(increaseCount());
          }}
        >
          +1
        </button>
      </div>
    </div>
  );
};
