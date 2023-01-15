import {
  createAction,
  createReducer,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

const CREATE_TODO = "todos/create";
const TOGGLE_TODO = "todos/toggle";
const REMOVE_TODO = "todos/remove";

export const createTodo = (id, text) => {
  return { type: CREATE_TODO, text, id };
};

export const toggleTodo = (id) => {
  return { type: TOGGLE_TODO, id };
};

export const removeTodo = (id) => ({ type: REMOVE_TODO, id });

//selector => 상태값들 중 특정 값을 고르거나 연산해서 리턴
export const getDoneCount = (state) => state.todos.length;

export const getUndoneCount = (state) =>
  state.todos.filter((todo) => !todo.done).length;

//@reduxjs/toolkit에서 제공하는 createSelector를 사용하면 같은 값이 들어왔을 때 연산하지 않는다 => 성능 향상에 도움이 된다.
export const getUndoneCount02 = createSelector(
  (state) => state.todos,
  (todos) => {
    return todos.filter((todo) => !todo.done).length;
  }
);

export const getPercentage = createSelector(
  (state) => state.todos.length,
  getUndoneCount,
  (totalCount, doneCount) => (doneCount / totalCount) * 100
);

const initialState = [
  { id: 1, text: "redux 배우기", done: false },
  { id: 2, text: "투두리스트 만들기", done: false },
];

export function todosReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_TODO":
      return state.concat({ id: action.id, text: action.text, done: false });
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

//액션 생성
export const createTodoAction = createAction("todos/create");
export const removeTodoAction = createAction("todos/remove");

//리듀서 생성
export const todosReducer02 = createReducer(initialState, (builder) => {
  builder
    .addCase(createTodoAction, (state, action) => {
      //기존 상태값이 직접 변경되면 return x => mutable
      const { id, text } = action.payload;
      state.unshift({ id, text: text, done: false });
    })
    .addCase(removeTodoAction, (state, action) => {
      //기존 상태값이 유지되면 return 값이 최신 상태값이 된다. => immutable(불변)
      return state.filter((todo) => todo.id !== action.payload);
    });
});

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    create(state, action) {
      const { id, text } = action.payload;
      state.push({ id, text, done: false });
    },
    remove(state, action) {
      const { id } = action.payload;
      return state.filter((todo) => todo.id !== id);
    },
    toggle(state, action) {
      const { id, todo } = action.payload;
      const idx = state.find((todo) => todo.id === id);
      todo.done = !todo.done;
    },
  },
});

export const { create, remove, toggle } = todosSlice.actions;
export default todosSlice.reducer;
