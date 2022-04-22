import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import client from "../../lib/api/client";
import useStore from "../../modules/store";
import List from "../../components/Post/List";
import WriteBtn from "../../components/Post/WriteBtn";
import Loader from "../../components/Common/Loader";

const PostListContainer = () => {
  const { category } = useParams();
  const user = useStore((state) => state.user);
  const setCategory = useStore((state) => state.setCategory);

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
      setCategory("");
      res = await client("/api/posts");
      return res.data;
    }
  };

  const { isLoading, data, error } = useQuery(["posts", category], getPosts);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <>
      {user && <WriteBtn />}
      <List data={data} />
    </>
  );
};

export default PostListContainer;
