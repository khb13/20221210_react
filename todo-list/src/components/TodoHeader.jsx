import styled, { css } from "styled-components";
import { useTodoState } from "../context/todos";

function TodoHeader() {
  const date = new Date(); //함수 밖에 있으면 날짜가 바뀌지 않음. 안에 있으면 바뀜. 대신에 렌더링이 되어야 함.
  const dateStr = date.toLocaleDateString("ko-KR", { dateStyle: "full" });

  const todos = useTodoState();

  const doneCount = todos.filter((todo) => todo.done).length;

  const percentage = doneCount && Math.round((doneCount / todos.length)* 100);
  
  return (
    <Header>
      <p>{dateStr}</p>
      <span>
        완료 : {doneCount}/{todos.length}
      </span>
      <StatusBar percentage={percentage}>
        <span>{percentage}%</span>
      </StatusBar>
    </Header>
  );
}

const Header = styled.div`
  padding: 15px 10px;
  border-bottom: 1px solid #333;

  p {
    font-size: 1.2rem;
    font-weight: bold;
  }
  span {
    font-size: 0.8rem;
  }
`;

const StatusBar = styled.div`
  height: 15px;
  margin-top: 5px;
  background-color: #aaa;
  border-radius: 4px;
  text-align: center;
  line-height: 13px;
  position: relative;
  font-size: 0.7rem;

  span {
    /* position: relative; */
    z-index: 100;
    color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }

  &::before {
    content: "";
    display: block;
    height: 100%;

    transform-origin: left;
    ${({ percentage }) => css`
      transform: scaleX(${percentage}%);
    `};
    background-color: Darkorange;
    border-radius: 4px;

    transition: 0.25s;
  }
`;

export default TodoHeader;
