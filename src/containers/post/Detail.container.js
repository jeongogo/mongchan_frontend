import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import client from "../../lib/api/client";
import PostDetail from "../../components/post/Detail";
import Loader from "../../components/common/Loader";

const PostDetailContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goEdit = () => {
    navigate(`/posts/edit/${id}`);
  };

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
      <PostDetail post={data[0]} goBack={goBack} goEdit={goEdit} />
    </div>
  );
};

export default PostDetailContainer;
