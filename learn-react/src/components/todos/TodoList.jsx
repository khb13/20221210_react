import { useContext, useEffect } from "react";
import { RemoveContext } from "./Todos";

function TodoList({todos, onRemove, onToggle}) {
    //Todo 리스트를 출력 (삭제, 토글)

    // useEffect(()=> {
    //     console.log("Todolist 렌더")
    // })
    
    return(
        <ul>
            {todos.map(todo => (
                <TodoItem 
                key={todo.id} 
                todo={todo} 
                onRemove={onRemove} 
                onToggle={onToggle}/>
            ))}

        </ul>
    )
}

function TodoItem({todo, onToggle}){
    
    const onRemove = useContext(RemoveContext);

    const {text, id, done} = todo;
    
    const handleRemove = () => {
        if(window.confirm("정말 삭제하시겠습니까?")) onRemove(id);
    };

    const handleToggle = ()=> {
        onToggle(id);
    }

    return (<li onClick={handleToggle} style={{ textDecoration: todo.done && "line-through"}}>
        {text}
        <button onClick={handleRemove}>삭제</button>
    </li>)
}


export default TodoList;