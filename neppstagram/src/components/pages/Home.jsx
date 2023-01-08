import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCurrentUser, getPosts } from "../../api/admin";
import { useUserId, useUserIdDispatch } from "../../data/auth";
import Post from "../home/Post";

function Home() {
  const [postList, setPostList] = useState([]);

  const [page, setPage] = useState(1);

  const [isLast, setIsLast] = useState(false);

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

  // const getData = () => {
  //   getPosts(page + 1).then((data) => setPostList([...postList, ...data]));

  //   setPage(page + 1);
  // };

  return (
    <Container>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      {!isLast && <BtnMore onClick={() => setPage(page + 1)}>더보기</BtnMore>}
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
  background-color: rgba(0, 0, 0, 0.4);

  font-size: 0.7rem;
  color: white;
  font-weight: 700;

  text-align: center;

  cursor: pointer;
  user-select: none;
`;
export default Home;
