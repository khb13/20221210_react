import styled, { css } from "styled-components";

function UserInfo({ author }) {
  const { name, profile_url } = author;
  return (
    <Container>
      <ImgCircle profile_url={profile_url} />
      <UserName>{name}</UserName>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const ImgCircle = styled.div`
  width: 30px;
  height: 30px;

  border: 2px solid #eee;
  border-radius: 50%;

  ${({ profile_url }) => css`
    background: url(${profile_url}) center / cover;
  `}
`;

const UserName = styled.p`
  font-size: 0.8rem;
  margin-left: 10px;
  font-weight: 700;
  color: #555;
`;

export default UserInfo;
