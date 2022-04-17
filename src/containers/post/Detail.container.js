import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useStore from "../../modules/store";
import client from "../../lib/api/client";
import PostDetail from "../../components/Post/Detail";
import Loader from "../../components/Common/Loader";

const PostDetailContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState();
  const setCategory = useStore((state) => state.setCategory);

  const goBack = () => {
    navigate(-1);
  };

  const goEdit = () => {
    navigate(`/posts/edit/${id}`);
  };

  const getPost = async () => {
    setIsLoading(true);
    try {
      const res = await client.get(`/api/posts/detail/${id}`);
      setPost(res.data);
      setCategory(res.data.category);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="max-w-3xl m-auto py-16 relative">
      {isLoading && <Loader />}
      {post && <PostDetail post={post} goBack={goBack} goEdit={goEdit} />}
    </div>
  );
};

export default PostDetailContainer;
