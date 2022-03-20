import React from "react";
import { useForm } from "react-hook-form";

const Login = ({ onSubmit, error }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLogin = (data) => onSubmit(data);

  return (
    <div className="py-10 pl-12 pr-20 bg-white shadow-3xl rounded-3xl">
      <form onSubmit={handleSubmit(onLogin)} autoComplete="off">
        <ul className="max-w-xl m-auto">
          <li className="flex items-start py-3">
            <label className="w-32 text-right text-lg mr-4 pt-1">아이디</label>
            <div className="w-full">
              <input
                type="text"
                className="border-b border-gray-300 focus:border-yellow-400 outline-none w-full py-1 px-2  text-lg"
                {...register("username", { required: true })}
              />
              {errors.name && (
                <div className="w-full mt-2 text-xs text-red-500">
                  필수 입력입니다.
                </div>
              )}
            </div>
          </li>
          <li className="flex items-start py-3">
            <label className="w-32 text-right text-lg mr-4 pt-1">
              비밀번호
            </label>
            <div className="w-full">
              <input
                type="password"
                className="border-b border-gray-300 focus:border-yellow-400 outline-none w-full py-1 px-2  text-lg"
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
        <div className="flex justify-center mt-4 pl-8 text-red-500">
          {error}
        </div>
        <div className="flex justify-center mt-8 pl-8">
          <button type="submit" className="w-40 h-12 rounded-3xl bg-yellow-400">
            로그인
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
