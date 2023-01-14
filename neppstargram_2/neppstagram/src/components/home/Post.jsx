import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useUserId } from "../../data/auth";
import CommentList from "../common/CommentList";
import PostImageBox from "../common/PostImageBox";
import UserInfo from "../common/UserInfo";

function Post({ post }) {
  const { id, author, img_list, content } = post;
  const [showComment, setShowComment] = useState(false);

  const userId = useUserId();

  return (
    <Container>
      <UserInfo user={author} />
      <PostImageBox img_list={img_list} />
      <div style={{ textAlign: "right", fontSize: "0.5rem", marginTop: 10 }}>
        {author.id === userId && <Link to={`edit/${id}`}>수정하기</Link>}
      </div>
      <ContentBox>
        <p>{content}</p>

        <BtnComment onClick={() => setShowComment(!showComment)}>
          댓글 보기
        </BtnComment>
      </ContentBox>
      {showComment && <CommentList postId={id} />}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  & + & {
    border-top: 1px solid #eee;
  }
`;

const ContentBox = styled.div`
  padding: 5px;
`;

const BtnComment = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  margin-top: 10px;

  cursor: pointer;
  user-select: none;
`;

export default Post;
