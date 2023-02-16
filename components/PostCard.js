const PostCard = ({ post }) => {
  return (
    <div>
      {post.user.nickname}
      <br />
      {post.content}
    </div>
  );
};

export default PostCard;
