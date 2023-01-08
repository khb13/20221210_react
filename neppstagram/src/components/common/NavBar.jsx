import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  AiFillHome,
  AiOutlineSearch,
  AiFillEdit,
  AiFillProfile,
} from "react-icons/ai";

function NavBar() {
  return (
    <Container>
      <NavItem>
        <StyledLink to="/">
          <AiFillHome size={24} />
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="search">
          <AiOutlineSearch size={24} />
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="Edit">
          <AiFillEdit size={24} />
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="profile">
          <AiFillProfile size={24} />
        </StyledLink>
      </NavItem>
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  border-top: 1px solid #ddd;
`;

const NavItem = styled.li`
  flex: 1;

  & + & {
    border-left: 1px solid #ddd;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

export default NavBar;
