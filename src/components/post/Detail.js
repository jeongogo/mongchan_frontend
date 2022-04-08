const PostDetail = ({ post, goBack, goEdit }) => {
  const { title, material, category, seasoning, content } =
    post;

  const onGoBack = () => {
    goBack();
  };

  const onGoEdit = () => {
    goEdit();
  };

  return (
    <div className="py-14 pl-20 pr-20 bg-white shadow-3xl rounded-3xl">
      <h2 className="mb-4 text-center text-2xl font-bold">{title}</h2>
      <ul>
        <li className="py-3">
          <h3 className="mr-6 shrink-0 w-20 underline">재료</h3>
          <p className="mt-2">{material}</p>
        </li>
        <li className="py-3">
          <h3 className="mr-6 shrink-0 w-20 underline">양념</h3>
          <p className="mt-2">{seasoning}</p>
        </li>
        <li className="py-3">
          <h3 className="mr-6 shrink-0 w-20 underline">조리 순서</h3>
          <p className="mt-2">{content}</p>
        </li>
      </ul>
      <div className="flex justify-center mt-8">
        <button
          type="button"
          className="w-40 h-12 mr-2 font-medium rounded-3xl bg-gray-200"
          onClick={onGoBack}
        >
          뒤로가기
        </button>
        <button
          type="button"
          className="w-40 h-12 mr-2 font-medium rounded-3xl bg-yellow-400"
          onClick={onGoEdit}
        >
          수정하기
        </button>
      </div>
    </div>
  );
};

export default PostDetail;
