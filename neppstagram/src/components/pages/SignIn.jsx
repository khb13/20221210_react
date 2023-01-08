import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getCurrentUser, signIn } from "../../api/admin";
import { useUserIdDispatch } from "../../data/auth";
import { useInputs } from "../../hooks/useInputs";
import AdminForm from "../admin/AdminForm";
import { Button } from "../common/button";
import { Input } from "../common/input";

function SignIn() {
  const [inputs, handleInputs] = useInputs({
    email: "",
    password: "",
  });

  const dispatch = useUserIdDispatch();

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    await signIn(inputs);

    const user = await getCurrentUser();

    dispatch(user.id);

    navigate("/");
  };

  const toSignUp = () => {
    navigate("/signup");
  };

  return (
    <AdminForm title="로그인" onSubmit={onSubmit}>
      <InputWrapper>
        <Input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleInputs}
        />
        <Input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleInputs}
        />
      </InputWrapper>
      <BtnWrapper>
        <Button bgColor="#999">로그인</Button>
        <Button onClick={toSignUp}>회원가입</Button>
      </BtnWrapper>
    </AdminForm>
  );
}

const InputWrapper = styled.div``;

const BtnWrapper = styled.div`
  margin-top: 30px;
`;

export default SignIn;
