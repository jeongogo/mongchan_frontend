import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GoSearch } from "react-icons/go";
import { FiLogOut, FiLogIn } from "react-icons/fi";

const Header = ({ user, category, onLogout }) => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  // Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Show Search
  const onSearchShow = () => {
    setShowSearch((prev) => !prev);
  };

  // Search
  const onSearch = (data) => {
    navigate(`/posts/search?title=${data.name}`);
  };

  // Submit Logout
  const onSubmitLogout = () => {
    onLogout();
  };

  return (
    <div className="w-full max-w-2xl m-auto bg-white z-10">
      <div className="flex items-center justify-between px-3 py-4">
        <Link to="/" className="text-2xl">
          mong<span className="font-bold">chan.</span>
        </Link>
        <div className="flex items-center text-xl ml-auto">
          <div onClick={onSearchShow} className="mr-3">
            <GoSearch />
          </div>
          {user ? (
            <button type="button" onClick={onSubmitLogout}>
              <FiLogOut />
            </button>
          ) : (
            <Link to="/login">
              <FiLogIn />
            </Link>
          )}
        </div>
      </div>
      {showSearch && (
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-black z-20">
          <form onSubmit={handleSubmit(onSearch)} autoComplete="off">
            <div className="absolute top-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full max-w-xl px-4">
              <input
                type="text"
                className="border rounded-full text-xl w-full py-3 pl-6 pr-12 focus:border-yellow-400 outline-none"
                {...register("name", { required: true })}
                placeholder={errors.name && "필수 입력입니다."}
                autoFocus
              />
              <button
                type="submit"
                className="absolute top-4 right-8 text-2xl outline-none"
              >
                <GoSearch />
              </button>
            </div>
          </form>
        </div>
      )}
      <div className="border-t border-b">
        <ul className="flex text-center">
          <li className="py-3 text-lg flex-grow">
            <Link
              to="/posts/category/korean"
              className={category === "한식" ? "underline" : null}
            >
              한식
            </Link>
          </li>
          <li className="py-3 text-lg flex-grow">
            <Link
              to="/posts/category/western"
              className={category === "양식" ? "underline" : null}
            >
              양식
            </Link>
          </li>
          <li className="py-3 text-lg flex-grow">
            <Link
              to="/posts/category/chinese"
              className={category === "중식" ? "underline" : null}
            >
              중식
            </Link>
          </li>
          <li className="py-3 text-lg flex-grow">
            <Link
              to="/posts/category/japanese"
              className={category === "일식" ? "underline" : null}
            >
              일식
            </Link>
          </li>
          <li className="py-3 text-lg flex-grow">
            <Link
              to="/posts/category/snack"
              className={category === "분식" ? "underline" : null}
            >
              분식
            </Link>
          </li>
          <li className="py-3 text-lg flex-grow">
            <Link
              to="/posts/category/etc"
              className={category === "기타" ? "underline" : null}
            >
              기타
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
