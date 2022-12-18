import styled, { css } from "styled-components";
// import { IoMdCheckbox, IoCheckboxOutline } from "react-icons/io";
import { AiOutlineCheck } from "react-icons/ai";
import { useTodoDispatch } from "../context/todos";
import { BsFillTrashFill } from "react-icons/bs";
import { useState } from "react";

function TodoItem({ todo }) {
  const { id, text, done } = todo;
  const [disappear, setDisappear] = useState(false);

  const dispatch = useTodoDispatch();

  //   const icon = done ? (
  //     <IoMdCheckbox size={20} color="#ffa500" />
  //   ) : (
  //     <IoCheckboxOutline size={20} color="#ffa500" />
  //   );

  const handleRemove = () => {
    setDisappear(true);
    setTimeout(() => {
      dispatch({ type: "REMOVE_TODO", id });
    }, 400);
  };

  return (
    <ItemBlock disappear={disappear}>
      {/* <div onClick={() => dispatch({ type: "TOGGLE_TODO", id })}>
      {icon} */}
      <CheckCircle
        done={done}
        onClick={() => dispatch({ type: "TOGGLE_TODO", id })}
      >
        {<AiOutlineCheck />}
      </CheckCircle>
      <p>{text}</p>
      <TrashIcon size={18} onClick={handleRemove} />
      {/* </div> */}
    </ItemBlock>
  );
}
const ItemBlock = styled.li`
  padding: 10px 10px;
  border-bottom: 1px solid #eee;
  align-items: center;
  display: flex;
  user-select: none;
  font-size: 0.9rem;
  p {
    flex: 1;
  }
  transition: transform 0.4s;
  ${({ disappear }) =>
    disappear &&
    css`
      transform: translate(100%);
    `}
`;

const TrashIcon = styled(BsFillTrashFill)`
  cursor: pointer;
  &:hover {
    color: Darkred;
  }
`;

const CheckCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;

  margin-right: 5px;

  border: 2px solid black;
  border-radius: 50%;

  ${({ done }) =>
    done &&
    css`
      background-color: black;
      color: white;
    `}

  cursor: pointer;
`;

export default TodoItem;
