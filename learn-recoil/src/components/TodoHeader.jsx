import { useSelector } from "react-redux";
import { useRecoilValue } from "recoil";
import { todosState, undoneCountState } from "../state/todos";
import {
  getDoneCount,
  getPercentage,
  getUndoneCount02,
} from "../state/todos_redux";

function TodoHeader() {
  // const todos = useRecoilValue(todosState);
  const count = useSelector(getDoneCount);
  // const undoneCount = useRecoilValue(
  //   (state) => state.todos.filter((todo) => !todo.done).length
  // );
  const undoneCount = useSelector(getUndoneCount02);
  const percentage = useSelector(getPercentage);

  return (
    <div>
      <p>2023. 01. 14</p>
      <p>
        할일 : {undoneCount}/{count} ({percentage})
      </p>
    </div>
  );
}

export default TodoHeader;
