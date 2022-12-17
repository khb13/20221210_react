import { createContext } from "react";
import { useCallback, useRef, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const initialState = [
    {id: 1, text: "useState 배우기", done: true},
    {id: 2, text: "Todo List 만들기", done: false},
];

export const RemoveContext = createContext(null);

function Todos() {
    //상태 관리를 할 상위 컴포넌트
    const [todos, setTodos] = useState(initialState);

    const nextId = useRef(3);

    //useCallback을 통해 재생성 방지 → 함수형 업데이트를 사용하면 디펜던시를 없앨 수 있다.
    const onCreate = useCallback((text) => {
        setTodos((todos)=>[...todos, {id: nextId.current,text, done:false}]);
        nextId.current++;
        },
        []
    );

    const onRemove = useCallback((id) =>{
        setTodos((todos)=>todos.filter(todo => todo.id !== id));
    },[]
    );

    const onToggle = useCallback((id) => {
        setTodos((todos)=>todos.map((todo)=> todo.id === id ? {...todo, done : !todo.done} :todo))
    },[]
    );

    return (
        <RemoveContext.Provider value={onRemove}>
            <div>
                <TodoInput onCreate={onCreate}/>
                <TodoList todos={todos} onToggle={onToggle}/>
            </div>  
        </RemoveContext.Provider>
        
    );

}

export default Todos;