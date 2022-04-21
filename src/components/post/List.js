import { Link } from "react-router-dom";

const List = ({ data }) => {
  return (
    <div className="px-4 py-8">
      <ul className="grid grid-cols-2 gap-2">
        {data.map((post) => (
          <li key={post._id}>
            <Link
              to={`/posts/detail/${post._id}`}
              className="block text-center"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
