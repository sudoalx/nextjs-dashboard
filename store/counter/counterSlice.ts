import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increaseCount(state) {
      state.count++;
    },
    decreaseCount(state) {
      if (state.count === 0) return;
      state.count--;
    },
    resetCount(state, action: PayloadAction<number>) {
      if (action.payload < 0) action.payload = 0;
      state.count = action.payload;
    },
  },
});

export const { increaseCount, decreaseCount, resetCount } =
  counterSlice.actions;

export default counterSlice.reducer;
