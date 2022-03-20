import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import Post from "../components/post/Post";
import Loader from "../components/common/Loader";
import { FiEdit } from "react-icons/fi";

const HomeContainer = () => {
  const getPosts = async () => {
    const data = await fetch("/api/posts");
    return data.json();
  };

  const { isLoading, data, error } = useQuery("posts", getPosts);

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
        <ul className="grid">
          {data.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomeContainer;
