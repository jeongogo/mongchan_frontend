import { useForm } from "react-hook-form";

const PostWrite = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onRegister = (data) => onSubmit(data);

  return (
    <div className="py-14 pl-12 pr-20 bg-white shadow-3xl rounded-3xl">
      <form onSubmit={handleSubmit(onRegister)} autoComplete="off">
        <ul className="w-full m-auto">
          <li className="flex items-start py-3">
            <label className="w-32 text-right text-lg mr-6 pt-1">제목</label>
            <div className="w-full">
              <input
                type="text"
                className="border-b border-gray-300 focus:border-yellow-400 outline-none w-full py-1 px-2"
                {...register("title", { required: true })}
              />
              {errors.name && (
                <div className="w-full mt-2 text-xs text-red-500">
                  필수 입력입니다.
                </div>
              )}
            </div>
          </li>
          <li className="flex items-start py-3">
            <label className="w-32 text-right text-lg mr-6 pt-1">
              메인재료
            </label>
            <div className="w-full">
              <input
                type="text"
                className="border-b border-gray-300 focus:border-yellow-400 outline-none w-full py-1 px-2"
                {...register("material_main")}
              />
            </div>
          </li>
          <li className="flex items-start py-3">
            <label className="w-32 text-right text-lg mr-6 pt-1">부재료</label>
            <div className="w-full">
              <input
                type="text"
                className="border-b border-gray-300 focus:border-yellow-400 outline-none w-full py-1 px-2"
                {...register("material_sub")}
              />
            </div>
          </li>
          <li className="flex items-start py-3">
            <label className="w-32 text-right text-lg mr-6 pt-1">
              카테고리
            </label>
            <div className="w-full pt-2">
              <input
                id="category_korean"
                {...register("category", { required: true })}
                type="radio"
                className="ml-3"
                value="한식"
              />
              <label htmlFor="category_korean" className="ml-1 cursor-pointer">
                한식
              </label>
              <input
                id="category_western"
                {...register("category", { required: true })}
                type="radio"
                className="ml-6"
                value="양식"
              />
              <label htmlFor="category_western" className="ml-1 cursor-pointer">
                양식
              </label>
              <input
                id="category_chinese"
                {...register("category", { required: true })}
                type="radio"
                className="ml-6"
                value="중식"
              />
              <label htmlFor="category_chinese" className="ml-1 cursor-pointer">
                중식
              </label>
              <input
                id="category_japanese"
                {...register("category", { required: true })}
                type="radio"
                className="ml-6"
                value="일식"
              />
              <label
                htmlFor="category_japanese"
                className="ml-1 cursor-pointer"
              >
                일식
              </label>
              <input
                id="category_snack"
                {...register("category", { required: true })}
                type="radio"
                className="ml-6"
                value="분식"
              />
              <label htmlFor="category_snack" className="ml-1 cursor-pointer">
                분식
              </label>
              <input
                id="category_etc"
                {...register("category", { required: true })}
                type="radio"
                className="ml-6"
                value="기타"
              />
              <label htmlFor="category_etc" className="ml-1 cursor-pointer">
                기타
              </label>
              {errors.category && (
                <div className="w-full mt-2 text-xs text-red-500">
                  필수 입력입니다.
                </div>
              )}
            </div>
          </li>
          <li className="flex items-start py-3">
            <label className="w-32 text-right text-lg mr-6 pt-1">양념</label>
            <div className="w-full">
              <input
                type="text"
                className="border-b border-gray-300 focus:border-yellow-400 outline-none w-full py-1 px-2"
                {...register("seasoning")}
              />
            </div>
          </li>
          <li className="flex items-start py-3 mt-4">
            <label className="w-32 text-right text-lg mr-6 pt-1">내용</label>
            <div className="w-full">
              <textarea
                className="border border-gray-300 focus:border-yellow-400 outline-none w-full py-1 px-2 h-40 rounded-sm resize-none"
                {...register("content")}
              />
            </div>
          </li>
        </ul>
        <div className="flex justify-center mt-4 pl-8">
          <button
            type="submit"
            className="w-40 h-12 ml-16 rounded-3xl bg-yellow-400"
          >
            등록하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostWrite;
