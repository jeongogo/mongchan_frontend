import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import client from "../../lib/api/client";
import useStore from "../../modules/store";
import Write from "../../components/Post/Write";
import Loader from "../../components/Common/Loader";

const PostWriteContainer = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const user = useStore((state) => state.user);
  const setCategory = useStore((state) => state.setCategory);

  useEffect(() => {
    if (!user) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
    setCategory("");
  }, []);

  const onSubmit = async (newPost) => {
    setIsLoading(true);
    try {
      if (newPost.file[0]) {
        const formData = new FormData();
        formData.append("file", newPost.file[0]);
    
        const res = await client.post("/api/posts/upload", formData);
        newPost.thumbnail = res.data;
      }
      await client.post("/api/posts", newPost);
      setIsLoading(false);
      navigate('/posts/');
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <Write onSubmit={onSubmit} />
    </>
  );
};

export default PostWriteContainer;
