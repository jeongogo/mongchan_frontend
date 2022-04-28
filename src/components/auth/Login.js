import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = ({ onSubmit, error }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLogin = (data) => onSubmit(data);

  return (
    <div className="px-4">
      <div className="max-w-md mt-10 md:mt-20 ml-auto mr-auto px-8 md:px-10 py-8 md:py-10 bg-white shadow-3xl rounded-3xl">
        <form onSubmit={handleSubmit(onLogin)} autoComplete="off">
          <ul>
            <li className="flex items-center py-2">
              <label className="w-32 text-md pt-1">아이디</label>
              <div className="w-full">
                <input
                  type="text"
                  className="border-b border-gray-300 focus:border-yellow-400 outline-none w-full py-1 px-2  text-md"
                  {...register("username", { required: true })}
                />
                {errors.name && (
                  <div className="w-full mt-2 text-xs text-red-500">
                    필수 입력입니다.
                  </div>
                )}
              </div>
            </li>
            <li className="flex items-center py-2">
              <label className="w-32 text-md pt-1">비밀번호</label>
              <div className="w-full">
                <input
                  type="password"
                  className="border-b border-gray-300 focus:border-yellow-400 outline-none w-full py-1 px-2  text-md"
                  {...register("password", { required: true })}
                />
                {errors.gender && (
                  <div className="w-full mt-2 text-xs text-red-500">
                    필수 입력입니다.
                  </div>
                )}
              </div>
            </li>
          </ul>
          {error && (
            <div className="flex justify-center mt-4 text-red-500">{error}</div>
          )}
          <div className="mt-6 md:mt-8">
            <button
              type="submit"
              className="w-full h-12 rounded-3xl bg-yellow-400"
            >
              로그인
            </button>
            <Link
              to="/register"
              className="mt-3 flex items-center justify-center h-12 rounded-3xl bg-gray-200"
            >
              회원가입
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
