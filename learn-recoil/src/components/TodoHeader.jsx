import { useRecoilValue } from "recoil";
import { todosState, undoneCountState } from "../state/todos";

function TodoHeader() {
  const todos = useRecoilValue(todosState);
  const undoneCount = useRecoilValue(undoneCountState);
  return (
    <div>
      <p>2023. 01. 14</p>
      <p>
        할일 : {undoneCount.length}/{todos.length}{" "}
      </p>
    </div>
  );
}

export default TodoHeader;
