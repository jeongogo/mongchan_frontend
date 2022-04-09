import React, { useEffect, useState } from "react";
import client from "../lib/api/client";
import useStore from "../modules/store";
import Home from "../components/Home";
import Loader from "../components/common/Loader";

const HomeContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState();
  const setCategory = useStore((state) => state.setCategory);

  const getRandomPost = async () => {
    setIsLoading(true);
    try {
      const res = await client("/api/posts/random");
      setPost(res.data[0]);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRandomPost();
    setCategory("");
  }, []);

  const refresh = () => {
    getRandomPost();
  };

  return (
    <div className="max-w-5xl m-auto py-16 relative">
      {isLoading && <Loader />}
      {post && <Home post={post} refresh={refresh} />}
    </div>
  );
};

export default HomeContainer;
