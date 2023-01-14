import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { getPostsByUserId, getUserById } from "../../api/admin";

function User() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const { name, profile_url } = user;

  const fetchData = useCallback(async () => {
    const user = await getUserById(id);
    setUser(user);

    const posts = await getPostsByUserId(id);
    setPosts(posts);
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container>
      <ProfileBox>
        <ImgBox>
          <img src={profile_url} alt="" />
        </ImgBox>
        <UserName>{name}</UserName>
      </ProfileBox>
      <PostList>
        {posts.map((post) => (
          <PostItem key={post.id}>
            <Link to={`post/${post.id}`}>
              <img src={post.img_list[0].url} alt="" />
            </Link>
          </PostItem>
        ))}
      </PostList>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  padding: 50px 20px;
  border-bottom: 1px solid #eee;
`;

const UserName = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 20px;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #eee;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

const PostList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const PostItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  width: calc(350px / 3);
  height: calc(350px / 3);
  overflow: hidden;

  img {
    width: 100%;
  }
`;
export default User;
