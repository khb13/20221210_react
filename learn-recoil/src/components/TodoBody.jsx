import { useSelector } from "react-redux";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { filterState, filterTodosState, todosState } from "../state/todos";
import TodoItem from "./TodoItem";

function TodoBody() {
  // const todos = useRecoilValue(filterTodosState);
  // const setFilterState = useSetRecoilState(filterState);
  const todos = useSelector((state) => state.todos);


  return (
    <div>
      {/* <label htmlFor="">
        done
        <input
          type="radio"
          name="done"
          id="done"
          value="done"
          onChange={(e) => setFilterState(e.target.value)}
          defaultChecked
        />
      </label>
      <label htmlFor="">
        undone
        <input
          type="radio"
          name="done"
          id="undone"
          value="undone"
          onChange={(e) => setFilterState(e.target.value)}
        />
      </label> */}
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoBody;
