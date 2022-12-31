import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { getDetail } from "../../api/movies";

function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState({
    data: null,
    error: null,
    loading: true,
  });

  const { data, error, loading } = detail;

  useEffect(() => {
    getDetail(id)
      .then((movie) =>
        setDetail({
          data: movie,
          error: null,
          loading: false,
        })
      )
      .catch((e) => {
        setDetail({
          data: null,
          loading: false,
        });
      });
  }, [id]);
  if (loading) return <div>로딩중</div>;
  if (error) return <div>{detail.error.message}</div>;
  if (!data) return <div>영화 정보가 없습니다.</div>;

  const { title, overview, release_date, poster_path, backdrop_path } = data;
  const img_url = "https://image.tmdb.org/t/p/w342" + poster_path;
  const back_url = "https://image.tmdb.org/t/p/w1280" + backdrop_path;

  return (
    <Container>
      <Wrapper back_url={back_url}>
        <ImgBox>
          <img src={img_url} alt={title} />
        </ImgBox>
        <DescBox>
          <Title>
            {title} <span>({release_date.substr(0, 4)})</span>
          </Title>
          <strong>개요</strong>
          <OverView>{overview}</OverView>
        </DescBox>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  max-width: 960px;
  padding: 50px 0;

  color: #fff;

  ${({ back_url }) => css`
    background: url(${back_url}) center / cover no-repeat;
    background-color: rgba(0, 0, 0, 0.6);
    background-blend-mode: overlay;
  `}
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 450px;
  flex-shrink: 0;
  margin: 0 40px;

  margin-right: 40px;

  overflow: hidden;

  background-color: tomato;
`;

const DescBox = styled.div``;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;

  span {
    font-size: 1.2rem;
  }
`;

const OverView = styled.p`
  margin-top: 10px;
`;

export default Detail;
