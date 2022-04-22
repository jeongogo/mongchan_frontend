import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../../modules/store";
import { useForm } from "react-hook-form";
import { GoSearch } from "react-icons/go";
import { FiLogIn, FiUser } from "react-icons/fi";

const Header = () => {
  const user = useStore((state) => state.user);
  const category = useStore((state) => state.category);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const searchRef = useRef();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSearchShow = () => {
    setShowSearchModal(true);
  };

  const onSearch = (data) => {
    navigate(`/posts/search?title=${data.name}`);
  };

  const handleSearchModal = (e) => {
    if (showSearchModal && (!searchRef.current || !searchRef.current.contains(e.target))) setShowSearchModal(false);
  }

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
            <Link to="/mypage" className="text-2xl">
              <FiUser />
            </Link>
          ) : (
            <Link to="/login">
              <FiLogIn />
            </Link>
          )}
        </div>
      </div>
      {showSearchModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-black z-20" onClick={handleSearchModal}>
          <form onSubmit={handleSubmit(onSearch)} autoComplete="off">
            <div className="absolute top-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full max-w-xl px-4" ref={searchRef}>
              <input
                type="text"
                className="border rounded-full text-lg w-full py-3 pl-6 pr-12 focus:border-yellow-400 outline-none"
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
