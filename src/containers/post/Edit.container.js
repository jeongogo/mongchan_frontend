import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import client from "../../lib/api/client";
import PostEdit from "../../components/post/Edit";
import Loader from "../../components/common/Loader";

const PostDetailContainer = () => {
  const { id } = useParams();

  const getPost = async () => {
    const res = await client.get(`/api/posts/${id}`);
    return res.data;
  };

  const { isLoading, data, error } = useQuery("postDetail", getPost);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <div className="max-w-3xl m-auto py-16 relative">
      <PostEdit post={data[0]} />
    </div>
  );
};

export default PostDetailContainer;
