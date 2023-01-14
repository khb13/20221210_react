import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../common/NavBar";

function Main() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("access-token");

    if (!token) {
      navigate("/signin");
    }
  }, [navigate]);
  return (
    <Container>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>

      <NavBar />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const OutletWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
`;

export default Main;
