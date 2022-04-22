import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const PostWrite = ({ onSubmit }) => {
  const navigate = useNavigate();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const goBack = () => {
    navigate(-1);
  };

  const onRegister = (data) => {
    onSubmit(data);
  };

  return (
    <div className="px-6 py-6">
      <form onSubmit={handleSubmit(onRegister)} autoComplete="off">
        <ul className="w-full m-auto">
          <li className="flex items-center py-2">
            <label className="w-32 pt-1">제목</label>
            <div className="w-full">
              <input
                type="text"
                className="border-b border-gray-300 focus:border-yellow-400 outline-none w-full py-1 px-2"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <div className="w-full mt-2 text-xs text-red-500">
                  필수 입력입니다.
                </div>
              )}
            </div>
          </li>
          <li className="flex items-center py-2">
            <label className="w-32 pt-1">
              재료
            </label>
            <div className="w-full">
              <input
                type="text"
                className="border-b border-gray-300 focus:border-yellow-400 outline-none w-full py-1 px-2"
                {...register("material")}
              />
            </div>
          </li>
          <li className="flex items-start py-2">
            <label className="w-32 pt-1">
              카테고리
            </label>
            <div className="w-full pt-2">
              <input
                id="category_korean"
                {...register("category", { required: true })}
                type="radio"
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
              <br />
              <input
                id="category_japanese"
                {...register("category", { required: true })}
                type="radio"
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
          <li className="flex items-start py-2">
            <label className="w-32">양념</label>
            <div className="w-full">
              <textarea
                className="border border-gray-300 focus:border-yellow-400 outline-none w-full py-2 px-3 h-40 rounded-sm resize-none"
                {...register("seasoning")}
              />
            </div>
          </li>
          <li className="flex items-start py-2 mt-4">
            <label className="w-32">조리 순서</label>
            <div className="w-full">
              <textarea
                className="border border-gray-300 focus:border-yellow-400 outline-none w-full py-2 px-3 h-40 rounded-md resize-none"
                {...register("content")}
              />
            </div>
          </li>
          <li className="flex items-center py-2">
            <label className="w-32 pt-1">썸네일</label>
            <div className="w-full">
              {!watch('file') || watch('file').length === 0 ? (
                <input
                  type="file"
                  className="w-full"
                  {...register("file")}
                />
              ) : (
                <div>{watch('file')[0].name}</div>
              )}
            </div>
          </li>
        </ul>
        <div className="flex justify-center mt-8">
          <button
            type="button"
            className="w-1/2 h-12 rounded-3xl bg-gray-200"
            onClick={goBack}
          >
            취소
          </button>
          <button
            type="submit"
            className="w-1/2 h-12 ml-2 rounded-3xl bg-yellow-400"
          >
            등록
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostWrite;
