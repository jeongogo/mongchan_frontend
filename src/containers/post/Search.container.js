import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import client from "../../lib/api/client";
import Post from "../../components/post/Post";
import Loader from "../../components/common/Loader";

const SearchContainer = () => {
  const { search } = useLocation();

  const searchPosts = async () => {
    const res = await client.get(`/api/posts/search${search}`);
    return res.data;
  };

  const { isLoading, data, error } = useQuery(
    ["searchPosts", search],
    searchPosts
  );

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
            <Post key={post._id} post={post} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchContainer;
