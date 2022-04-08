import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import client from "../../lib/api/client";
import useStore from "../../modules/store";
import Write from "../../components/post/Write";

const PostWriteContainer = () => {
  const navigate = useNavigate();
  const user = useStore((state) => state.user);
  const setCategory = useStore(state => state.setCategory);

  useEffect(() => {
    if (!user) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
    setCategory('');
  }, []);

  // addAthlete
  const onSubmit = async (newPost) => {
    try {
      await client.post("/api/posts", newPost);
      alert("등록이 완료되었습니다.");
      navigate(`/posts/`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-3xl m-auto py-16 relative">
      <Write onSubmit={onSubmit} />
    </div>
  );
};

export default PostWriteContainer;
