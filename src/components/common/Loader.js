import React from "react";
import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <BallTriangle color="#FACC15" height={80} width={80} />
    </div>
  );
};

export default Loader;
