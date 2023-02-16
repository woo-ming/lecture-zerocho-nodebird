import { Avatar, Card, Button } from "antd";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <Card
      actions={[
        <div key={"twit"}>
          짹짹
          <div />0
        </div>,
        <div key={"followings"}>
          팔로잉
          <div />0
        </div>,
        <div key={"fllowers"}>
          팔로워
          <div />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>WooMing</Avatar>} title="WooMing" />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
