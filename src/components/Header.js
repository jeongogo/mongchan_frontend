import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GoSearch } from "react-icons/go";
import { FiLogIn, FiLogOut } from "react-icons/fi";

const Header = ({ user, onLogout }) => {
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
      <div className="max-w-6xl h-20 m-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-2xl">
          mong<span className="font-bold">chan</span>
        </Link>
        <div className="flex items-center">
          <form
            onSubmit={handleSubmit(onSearch)}
            autoComplete="off"
            className="flex items-center"
          >
            <input
              type="text"
              className="border rounded-3xl text-md w-44 py-2 px-4 mr-2 focus:border-yellow-400 outline-none"
              {...register("name", { required: true })}
              placeholder={errors.name && "필수 입력입니다."}
            />
            <button type="submit" className="text-2xl outline-none">
              <GoSearch />
            </button>
          </form>
          {user ? (
            <button
              type="button"
              onClick={onSubmitLogout}
              className="text-2xl ml-4"
            >
              <FiLogOut />
            </button>
          ) : (
            <Link to="/login" className="text-2xl ml-4">
              <FiLogIn />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
