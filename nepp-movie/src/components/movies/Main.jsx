import styled from "styled-components";
import Header from "./Header";
import MovieList from "./MovieList";

function Main() {
  return (
    <Container>
      <Wrapper>
        <MovieList title="What's Popular" />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;
const Wrapper = styled.div`
  flex: 1;
  max-width: 960px;
`;

export default Main;
