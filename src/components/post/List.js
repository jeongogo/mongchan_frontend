import { Link } from "react-router-dom";

const List = ({ data }) => {
  return (
    <div className="md:px-4 md:py-8">
      <ul className="max-w-2xl ml-auto mr-auto grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
        {data.map((post) => (
          <li key={post._id}>
            <Link
              to={`/posts/detail/${post._id}`}
              className="h-28 flex items-center justify-center bg-gray-50 overflow-hidden"
            >
              {post.thumbnail ? (
                <img src={`/${post.thumbnail}`} alt="" className="w-full" />
              ) : (
                <h2>{post.title}</h2>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
