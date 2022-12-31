import { Link } from "react-router-dom";
import styled from "styled-components";

function MovieItem({ movie }) {
  const { title, release_date, poster_path, id } = movie;

  const img_url = "https://image.tmdb.org/t/p/w200/" + poster_path;
  return (
    <Container>
      <Link to={"/movies/" + id}>
        <ImgBox>
          <img src={img_url} alt="포스터" />
        </ImgBox>
        <MovieTitle>{title}</MovieTitle>
        <ReleaseDate>{release_date}</ReleaseDate>
      </Link>
    </Container>
  );
}

const Container = styled.li`
  & + & {
    margin-left: 15px;
  }
`;

const ImgBox = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 150px;
  height: 225px;

  overflow: hidden;
  background-color: orange;
  img {
    width: 342px;
  }
`;

const MovieTitle = styled.h3`
  font-size: 1rem;
  margin-top: 8px;
`;

const ReleaseDate = styled.div`
  font-size: 0.8rem;
  color: #999;
`;

export default MovieItem;
