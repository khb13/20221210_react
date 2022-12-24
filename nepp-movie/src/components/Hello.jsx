import { Link, Route, useNavigate } from "react-router-dom";

export const users = [
  { id: 1, name: "seok", email: "hbs9312@gmail.com" },
  { id: 2, name: "test", email: "test123@test.com" },
  { id: 3, name: "test1", email: "test321@test.com" },
];

function Hello() {
  //Link 태그를 클릭하는 것 외에 url을 변경할 때 사용한다.
  const navigate = useNavigate();

  const onChangeLink = (id) => {
    if (window.confirm("이동하시겠습니까?")) navigate(`/hello/${id}`);
  };

  return (
    <div>
      <h1>Hello</h1>
      <p>Hello 페이지입니다.</p>

      <ul>
        {users.map((user) => (
          <li>
            {/* <Link to={`/hello/${user.id}`}>{user.name}</Link> */}
            <p onClick={() => onChangeLink(user.id)}>{user.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Hello;
