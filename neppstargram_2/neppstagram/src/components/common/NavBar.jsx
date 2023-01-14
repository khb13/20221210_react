import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  MdOutlineHome,
  MdOutlineSearch,
  MdPersonOutline,
} from "react-icons/md";
import { RxPlus } from "react-icons/rx";

function NavBar() {
  return (
    <Container>
      <NavItem>
        <StyledLink to="/">
          <MdOutlineHome size={24} />
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="search">
          <MdOutlineSearch size={24} />
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="edit">
          <RxPlus size={24} />
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="profile">
          <MdPersonOutline size={24} />
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
