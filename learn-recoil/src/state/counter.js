import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

export const INCREASE = "counter/increase";
export const DECREASE = "counter/decrease";

export function counterReducer(state = 0, action) {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      return state;
  }
}

//액션 생성 => 액션을 실행하면 객체가 반환되고 type과 payload를 담은 객체 생성. => createReducer의 case에 전달되고 payload에 필요한 값을 담아서 상태 업데이트.
export const increasement = createAction("counter/increment");
export const decreasement = createAction("counter/decrement");

export const counterReducer02 = createReducer({ value: 0 }, (builder) => {
  builder
    .addCase(increasement, (state, action) => {
      state.value += action.payload;
    })
    .addCase(decreasement, (state, action) => {
      state.value -= action.payload;
    });
});

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    incre(state, action) {
      return state + action.payload.amount;
    },
    decre(state, action) {
      return state - action.payload.amount;
    },
  },
});

export const { incre, decre } = counterSlice.actions;
export default counterSlice.reducer;
