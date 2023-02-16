import AppLayout from "../components/AppLayout";
import { Button, Checkbox, Form } from "antd";
import Head from "next/head";
import { useCallback, useState } from "react";
import useInput from "../hooks/useInput";
import styled from "styled-components";

const ErrorMessage = styled.div`
  color: red;
`;

const SignUp = () => {
  const [id, onChangeId] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");

  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback(
    (e) => {
      setTerm(e.target.checked);
      setTermError(false);
    },
    [term]
  );

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    console.log(id, nickname, password);
  }, [password, passwordCheck, term]);

  return (
    <AppLayout>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <input name="user-id" type="text" required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="nickname">닉네임</label>
          <br />
          <input
            name="nickname"
            type="text"
            required
            onChange={onChangeNickname}
          />
        </div>
        <div>
          <label htmlFor="password">패스워드</label>
          <br />
          <input
            name="password"
            type="password"
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="password-check">패스워드체크</label>
          <br />
          <input
            name="password-check"
            type="password"
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && (
            <ErrorMessage>패스워드가 일치하지 않습니다.</ErrorMessage>
          )}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            말잘들을 것을 동의합니다.
          </Checkbox>
          {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit">
            가입하기
          </Button>
        </div>
      </Form>
    </AppLayout>
  );
};

export default SignUp;
