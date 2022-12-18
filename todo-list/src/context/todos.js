import { createContext, useContext, useReducer } from "react";

const initialState = [
  { id: 1, text: "투두리스트 스타일링하기", done: true },
  { id: 2, text: "투두리스트 기능 구현하기", done: false },
  { id: 3, text: "투두리스트 애니메이션 만들기", done: false },
];

function reducer(state, action) {
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

const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) throw Error("TodoProvider 없음");
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) throw Error("TodoProvider 없음");
  return context;
}
