import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { _id, title } = post;

  return (
    <li>
      <Link to={`/posts/detail/${_id}`}>{title}</Link>
    </li>
  );
};

export default Post;
