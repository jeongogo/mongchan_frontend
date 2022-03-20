import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-md m-auto my-10 px-6 py-12 bg-white shadow-3xl rounded-3xl text-center">
      <div className="flex justify-center mt-10">
        <Link
          to="/posts"
          className="text-lg py-3 px-8 mr-3 bg-yellow-400 rounded-3xl"
        >
          레시피 리스트
        </Link>
        <Link
          to="/posts/write"
          className="text-lg py-3 px-8 mr-3 bg-yellow-400 rounded-3xl"
        >
          레시피 추가
        </Link>
      </div>
    </div>
  );
};

export default Home;
