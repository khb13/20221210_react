import { createContext, useContext, useReducer } from "react";

const initialState = [
    {id: 1, text: "리액트 배우기", done: true},
    {id: 2, text: "투두 리스트 만들기", done: false},
    {id: 3, text: "투두 리스트 꾸미기", done: false},
]

function reducer(state, action){
    switch(action.type){
        case "CREATE_TODO":
            return [...state, {id: action.id, text: action.text, done:false }];
        case "REMOVE_TODO":
            return state.filter((todo) => todo.id !==action.id);
        case "TOGGLE_TODO":
            return state.map((todo) => 
            todo.id === action.id ? {...todo, done: !todo.done} : todo);
        default:
            return state;
    }
}

const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);

export function TodoProvider({children}){
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
             </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
        
    );
}

export function useTodoState(){
    const context = useContext(TodoStateContext);
        if(!context) throw new Error("TodoProvider 없음");
    return context 
}

export function useTodoDispatch(){
    return useContext(TodoDispatchContext);
}