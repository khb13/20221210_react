import { useState } from "react";
import styled from "styled-components";
import { Input } from "../common/input";

function Search() {
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <Container>
      <Input type="text" placeholder="이름을 입력" />
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
`;

const InputBox = styled.div`
  padding: 5px 10px;
`;

export default Search;
