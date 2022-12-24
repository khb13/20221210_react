import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div>
      <h1>Main</h1>
      <p>메인 페이지입니다.</p>
      <Outlet />
    </div>
  );
}

        

export default Main;
