import React from "react";
import { Link } from "react-router-dom";
import { IoRefresh } from "react-icons/io5";

const Home = ({ post, refresh }) => {
  const onRefresh = () => refresh();

  return (
    <div className="max-w-2xl m-auto">
      <div className="max-w-lg px-6 mt-16 ml-auto mr-auto">
        <div className="flex justify-center items-center">
          <h1 className="text-xl">오늘 뭐먹지?</h1>
          <button type="button" className="text-2xl ml-2" onClick={onRefresh}>
            <IoRefresh />
          </button>
        </div>
        <div className="mt-6 h-40 shadow-3xl rounded-3xl text-center relative">
          <Link to={`/posts/detail/${post._id}`} className="block h-full">
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-lg">
              {post.title}
            </div>
            <div className="">
              <img src="" alt="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
