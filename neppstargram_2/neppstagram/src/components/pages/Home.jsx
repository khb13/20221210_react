import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getCurrentUser, getPosts } from "../../api/admin";
import { useUserIdDispatch } from "../../data/auth";

import Post from "../home/Post";

function Home() {
  const [postList, setPostList] = useState([]);
  const [page, setPage] = useState(1);
  const [isLast, setIsLast] = useState(false);

  const { data, isLoading } = useQuery("posts", () => getPosts(page), {
    onSuccess: (data) => {
      console.log("데이터 받아오는데 성공", data);
    },
    onError: (err) => {
      alert(err.response.data.message);
    },
  });

  const dispatch = useUserIdDispatch();

  useEffect(() => {
    getCurrentUser().then((user) => dispatch(user.id));
  }, [dispatch]);

  useEffect(() => {
    getPosts(page).then((data) => {
      if (data.length < 10) setIsLast(true);
      setPostList((postList) => [...postList, ...data]);
    });
  }, [page]);

  if (isLoading) return <div>로딩 중</div>;

  return (
    <Container>
      {data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      {!isLast && <BtnMore onClick={() => setPage(page + 1)}>더 보기</BtnMore>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const BtnMore = styled.div`
  padding: 10px 20px;
  margin-top: 30px;

  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.6);

  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  text-align: center;

  cursor: pointer;
  user-select: none;
`;

export default Home;
