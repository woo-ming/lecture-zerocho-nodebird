import PropTypes from "prop-types";
import Link from "next/link";
import { Menu } from "antd";

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Menu mode={"horizontal"}>
          <Menu.Item>
            <Link href={"/"}>노드 버드</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href={"/profile"}>프로필</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href={"/signup"}>회원가입</Link>
          </Menu.Item>
        </Menu>
      </div>
      {children}
    </div>
  );
};

AppLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
