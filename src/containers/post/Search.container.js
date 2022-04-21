import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import client from "../../lib/api/client";
import useStore from "../../modules/store";
import Loader from "../../components/Common/Loader";

const SearchContainer = () => {
  const { search } = useLocation();
  const setCategory = useStore((state) => state.setCategory);

  const searchPosts = async () => {
    const res = await client.get(`/api/posts/search${search}`);
    return res.data;
  };

  const { isLoading, data, error } = useQuery(
    ["searchPosts", search],
    searchPosts
  );

  useEffect(() => {
    setCategory("");
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <div className="max-w-5xl m-auto py-16 relative">
      <div className="py-10 pl-12 pr-12 bg-white shadow-3xl rounded-3xl">
        <ul>
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
    </div>
  );
};

export default SearchContainer;
