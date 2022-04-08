import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GoSearch } from "react-icons/go";
import { FiLogIn, FiLogOut } from "react-icons/fi";

const Header = ({ user, onLogout, category }) => {
  const navigate = useNavigate();

  // Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Search
  const onSearch = (data) => {
    navigate(`/posts/search?title=${data.name}`);
  };

  // Submit Logout
  const onSubmitLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <div className="fixed top-0 left-0 w-full border-b bg-white z-10">
      <div className="max-w-5xl h-20 m-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-2xl">
          mong<span className="font-bold">chan.</span>
        </Link>
        <div className="ml-auto">
          <ul className="flex pr-4">
            <li className="mx-4 text-lg">
              <Link to="/posts/category/korean" className={category === "한식" ? "underline" : null}>한식</Link>
            </li>
            <li className="mx-4 text-lg">
              <Link to="/posts/category/western" className={category === "양식" ? "underline" : null}>양식</Link>
            </li>
            <li className="mx-4 text-lg">
              <Link to="/posts/category/chinese" className={category === "중식" ? "underline" : null}>중식</Link>
            </li>
            <li className="mx-4 text-lg">
              <Link to="/posts/category/japanese" className={category === "일식" ? "underline" : null}>일식</Link>
            </li>
            <li className="mx-4 text-lg">
              <Link to="/posts/category/snack" className={category === "분식" ? "underline" : null}>분식</Link>
            </li>
            <li className="mx-4 text-lg">
              <Link to="/posts/category/etc" className={category === "기타" ? "underline" : null}>기타</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <form
            onSubmit={handleSubmit(onSearch)}
            autoComplete="off"
            className="flex items-center"
          >
            <div className="relative">
              <input
                type="text"
                className="border rounded-3xl text-md w-42 py-2 pl-4 pr-10 mr-2 focus:border-yellow-400 outline-none"
                {...register("name", { required: true })}
                placeholder={errors.name && "필수 입력입니다."}
              />
              <button type="submit" className="absolute top-3 right-6 text-lg outline-none">
                <GoSearch />
              </button>
            </div>
          </form>
          {user ? (
            <button
              type="button"
              onClick={onSubmitLogout}
              className="text-2xl ml-2"
            >
              <FiLogOut />
            </button>
          ) : (
            <Link to="/login" className="text-2xl ml-2">
              <FiLogIn />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
