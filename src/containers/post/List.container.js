import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import client from "../../lib/api/client";
import useStore from '../../modules/store';
import Post from "../../components/post/Post";
import Loader from "../../components/common/Loader";
import { FiEdit } from "react-icons/fi";

const PostListContainer = () => {
  const { category } = useParams();
  const setCategory = useStore(state => state.setCategory);

  const getPosts = async () => {
    let res = [];
    let categoryName = null;

    if (category) {
      switch (category) {
        case "korean":
          categoryName = "한식";
          break;
        case "western":
          categoryName = "양식";
          break;
        case "chinese":
          categoryName = "중식";
          break;
        case "japanese":
          categoryName = "일식";
          break;
        case "snack":
          categoryName = "분식";
          break;
        case "etc":
          categoryName = "기타";
          break;
        default:
          categoryName = null;
          break;
      }
      setCategory(categoryName);
      res = await client(`/api/posts/category/${category}`);
      return res.data;
    } else {
      res = await client("/api/posts");
    }
    return res.data;
  };

  const { isLoading, data, error } = useQuery(["posts", category], getPosts);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <div className="max-w-5xl m-auto py-16 relative">
      <div className="fixed right-8 bottom-20">
        <Link
          to={"/posts/write"}
          className="block text-2xl px-4 py-4 rounded-full shadow-lg border border-gray-100"
        >
          <FiEdit />
        </Link>
      </div>
      <div className="py-10 pl-12 pr-12 bg-white shadow-3xl rounded-3xl">
        <ul className="grid grid-cols-4 gap-2">
          {data.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostListContainer;
