import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { deleteComment, getComments, postComment } from "../../api/admin";
import { useUserId } from "../../data/auth";

function CommentList({ postId }) {
  const [page, setPage] = useState(1);

  const [input, setInput] = useState("");

  const currentUserId = useUserId;

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handlePage = () => {
    setPage(page + 1);
  };

  const getData = useCallback(() => {
    getComments(postId, page).then((data) =>
      setCommentList((commentList) => [...commentList, ...data])
    );
  }, [postId, page]);


  const handleSubmit = () => {
    if (input.length === 0) {
      alert("댓글 입력 필요");
      return;
    }
    postComment({ postId, content: input });

    getData();
  };

  const handleDelete = async (commentId) => {
    if (window.confirm("댓글을 삭제?")) await deleteComment(commentId);

    setCommentList(commentList.filter((comment) => comment.id !== commentId));
  };

  useEffect(() => {
    //setCommentList 놓침
    getData();
  }, [getData]);

  return (
    <Container>
      {CommentList.map((comment) => (
        <CommentItem>
          <p>{comment.content}</p>
          <BtnDelete onClick={() => handleDelete(comment.id)}>삭제</BtnDelete>
        </CommentItem>
      ))}
      <BtnMore>더보기</BtnMore>
      <InputBox>
        <InputComment placeholder="댓글 입력" onChange={handleInput} />
        <BtnSubmit onClick={handleSubmit}>등록</BtnSubmit>
      </InputBox>
    </Container>
  );
}

const Container = styled.div`
  padding: 5px;
`;

const CommentItem = styled.li`
  display: flex;
  justify-content: space-between;

  padding: 5px 0;
`;

const InputBox = styled.div`
  display: flex;
  margin-top: 20px;
`;

const InputComment = styled.input`
  padding: 5px;
  flex: 1;
  border: none;
  outline: none;
  border-bottom: 1px solid #eee;
  font-size: 0.8rem;
`;

const BtnSubmit = styled.div`
  padding: 5px 10px;
  margin-left: 5px;
  border-radius: 10px;

  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  cursor: pointer;
  user-select: none;
`;

const BtnDelete = styled(BtnSubmit)`
  background-color: rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: red;
  }
`;

const BtnMore = styled.div`
  font-size: 0.8rem;
  font-weight: 700;

  margin-top: 10px;
  cursor: pointer;
  user-select: none;
`;

export default CommentList;
