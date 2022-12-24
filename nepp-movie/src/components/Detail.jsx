import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { users } from "./Hello";

function Detail() {
  const { userId } = useParams();
  const { userEmail } = useParams();

  const user = users.find((user) => user.id === parseInt(userId));

  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
    </div>
  );
}

export default Detail;
