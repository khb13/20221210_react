import styled from "styled-components";
import { postUser } from "../../api/admin";
import { useInputs } from "../../hooks/useInputs";
import AdminForm from "../admin/AdminForm";
import { Button } from "../common/button";
import { Input } from "../common/input";

function SignUp() {
  const [inputs, handleInputs] = useInputs({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = inputs;

  const active = name !== "" && name !== email && password !== "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!active) return;
    
    postUser(inputs).then((res) => console.log(res));
  };

  return (
    <AdminForm title="회원가입" onSubmit={handleSubmit}>
      <InputWrapper>
        <Input
          type="text"
          placeholder="이름을 입력해주세요."
          name="name"
          onChange={handleInputs}
        />
        <Input
          tyle="email"
          placeholder="이메일을 입력해주세요."
          name="email"
          onChange={handleInputs}
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          name="password"
          onChange={handleInputs}
        />
      </InputWrapper>

      <BtnWrapper>
        <Button bgColor={active ? "#000" : "#ddd"}>회원가입</Button>
        <Button bgColor="#ddd">취소</Button>
      </BtnWrapper>
    </AdminForm>
  );
}

const InputWrapper = styled.div``;

const BtnWrapper = styled.div`
  margin-top: 30px;
`;

export default SignUp;
