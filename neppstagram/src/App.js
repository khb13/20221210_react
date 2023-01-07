import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <Container>
      <Wrapper>
        <Routes>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;

  background-color: #eee;
`;

const Wrapper = styled.div`
  width: 350px;

  background-color: #fff;
`;

export default App;
