import { useCallback, useMemo, useRef, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function countUndoneTodo(todos){
    console.log("할 일 세는 중");
    return todos.filter(todo => !todo.done).length;
}

function Todo() {
    const [todos, setTodos] = useState([
        {id: 1, text:"투두리스트 만들기", date:"2022/12/10", done:true},
        ]);

    
    //useMemo : 특정 값이 변할 때만 연산을 하고 나머지 경우는 기존 값을 재사용 한다.
    const undoneTodoCount = useMemo(()=>countUndoneTodo(todos), [todos]);
    console.log(undoneTodoCount);



    //useRef로 관리되는 값은 변경되어도 리렌더링이 발생하지 않는다. → 렌더링과 별개로 변수처럼 사용한다.
    const nextId = useRef(2);
    //↑ 얘는 렌더링이 일어나도 변하지 않음.

    

    
    const handleSubmit = (inputs) => {
        //객체나 배열을 업데이트 할 때는 불변성을 지켜야한다. → 지키지 않으면 상태 변화를 감지할 수 없다.
        // setTodos([...todos, input]); //스프레드 사용하는 것을 잊지 말 것!
        //┌→ 새로운 객체를 생성하는 방식으로 작성됨
        setTodos(todos.concat({
            ...inputs,
            id: nextId.current,
            done: false,
            })
        );
        nextId.current++;
    };

    const onRemove = (id) =>{
        //배열에서 특정 항목 제거하기
            //→ 배열에서 필터링한 것을 업데이트 함수의 인자로 전달.
            //→ 한 개만 필터링 해야 함. → 선택한 요소 빼고 나머지만 반환한 것이 곧 제거 효과
        setTodos(todos.filter((todo) => todo.id !== id)); //filter를 좀 더 잘 알아둘 것.
    };
    console.log(todos);

    const onToggle = (id) =>{
        // todo의 done 값을 반전 시키는 기능 만들어보기
        setTodos(todos.map((todo)=>
            todo.id === id ? {...todo, done: !todo.done} : todo
            // if(id === todo.id) return {...todo, done: !todo.done};
            // else return todo;
        )
        )
    }
    
    return (
    <>
        <TodoInput handleSubmit={handleSubmit}/>
        <TodoList onRemove={onRemove} onToggle={onToggle} todos={todos}/>
    </>
    );
    
}

export default Todo;