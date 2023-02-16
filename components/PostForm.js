import { Button, Form, Input } from "antd";
import { useCallback, useRef, useState } from "react";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { addPost } from "../reducers/post";

const PostForm = () => {
  const dispatch = useDispatch();
  const imageInput = useRef();
  const [text, setText] = useState("");
  const [imagePaths, setImagePaths] = useState([]);
  const onSubmit = useCallback(() => {
    dispatch(addPost);
    setText("");
  }, []);

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, []);

  return (
    <Form
      style={{ margin: "10px 0 20 px" }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="어떤 신기한 일이 있었나요?"
      />
      <div>
        <input
          type="file"
          multiple
          ref={imageInput}
          hidden
          style={{ display: "none" }}
        />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          짹짹
        </Button>
        <div>
          {imagePaths.map((v) => (
            <div key={v} style={{ display: "inline-block" }}>
              <img
                src={"http://localhost:3000/" + v}
                style={{ width: "200px" }}
                alt={v}
              />
              <div>
                <Button>제거</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Form>
  );
};

export default PostForm;
