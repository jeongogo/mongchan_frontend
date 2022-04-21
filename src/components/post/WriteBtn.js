import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

const WriteBtn = () => {
  return (
    <div className="fixed right-4 bottom-6">
      <Link
        to={"/posts/write"}
        className="block text-2xl px-4 py-4 rounded-full shadow-lg border border-gray-100"
      >
        <FiEdit />
      </Link>
    </div>
  );
};

export default WriteBtn;
