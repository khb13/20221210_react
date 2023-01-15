import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSetRecoilState } from "recoil";
import { todosState } from "../state/todos";
import { createTodo } from "../state/todos_redux";

function TodoInput() {
  const setTodos = useSetRecoilState(todosState);
  const [text, setInput] = useState("");

  const dispatch = useDispatch();

  const nextId = useRef(3);

  const handleCreate = () => {
    // setTodos((todos) => [
    //   ...todos,
    //   { id: todos.length + 1, text, done: false },
    // ]);
    dispatch(createTodo(nextId.current, text));

    nextId.current++;
  };
  return (
    <div>
      <input type="text" onChange={(e) => setInput.apply(e.target.value)} />
      <button onClick={handleCreate}>등록</button>
    </div>
  );
}

export default TodoInput;
