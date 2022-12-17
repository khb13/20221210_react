//useReducer로 투두리스트 상태관리 해보기

import { createContext} from "react";
import { useReducer } from "react";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";
import { TodoProvider } from "../../contexts/todos";

function Todos(){
    return(
        <>
        <TodoProvider>
            <div>
                <h1 className="title">할일 목록</h1>
                <TodoCreate />
                <TodoList /> 
            </div>
        </TodoProvider>
        </>        
    );   
}

export default Todos;