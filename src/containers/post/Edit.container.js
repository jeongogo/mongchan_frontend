import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import client from "../../lib/api/client";
import PostEdit from "../../components/Post/Edit";
import Loader from "../../components/Common/Loader";

const PostDetailContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState();

  const getPost = async () => {
    setIsLoading(true);
    try {
      const res = await client.get(`/api/posts/detail/${id}`);
      setPost(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  const onSubmit = async (updatePost) => {
    try {
      await client.patch(`/api/posts/${id}`, updatePost);
      alert("수정 완료되었습니다.");
      navigate(`/posts/`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      {post && <PostEdit post={post} onSubmit={onSubmit} />}
    </>
  );
};

export default PostDetailContainer;
