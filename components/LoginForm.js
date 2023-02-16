import { Button, Form } from "antd";
import { useCallback, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { loginAction } from "../reducers/user";
import { useDispatch } from "react-redux";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();

  const [id, onChangId] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    dispatch(loginAction(id, password));
  }, [id, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <input name="user-id" value={id} onChange={onChangId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href={"/signup"}>
          <Button>회원가입</Button>
        </Link>
      </ButtonWrapper>
      <div></div>
    </FormWrapper>
  );
};
export default LoginForm;
