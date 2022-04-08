import React from "react";
import { Link } from "react-router-dom";
import { FiEdit, FiRefreshCw } from "react-icons/fi";
import { IoRefresh } from "react-icons/io5";


const Home = ({ post, refresh }) => {
  const onRefresh = () => refresh();

  return (
    <div className="max-w-md m-auto my-10 px-6 py-12 bg-white shadow-3xl rounded-3xl text-center relative">
      <div className="fixed right-8 bottom-20">
        <Link
          to={"/posts/write"}
          className="block text-2xl px-4 py-4 rounded-full shadow-lg border border-gray-100"
        >
          <FiEdit />
        </Link>
      </div>
      <button type="button" className="absolute top-6 right-6 text-2xl" onClick={onRefresh}>
        <IoRefresh />
      </button>
      <Link to={`/posts/detail/${post._id}`}>{post.title}</Link>
    </div>
  );
};

export default Home;
