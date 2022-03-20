const PostDetail = ({ post, goBack, goEdit }) => {
  const { title, material_main, material_sub, category, seasoning, content } =
    post;

  const onGoBack = () => {
    goBack();
  };

  const onGoEdit = () => {
    goEdit();
  };

  return (
    <div className="py-10 pl-20 pr-20 bg-white shadow-3xl rounded-3xl">
      <ul>
        <li className="flex py-2">
          <h3 className="mr-6 text-lg w-20">제목</h3>
          <p>{title}</p>
        </li>
        <li className="flex py-2">
          <h3 className="mr-6 text-lg w-20">메인재료</h3>
          <p>{material_main}</p>
        </li>
        <li className="flex py-2">
          <h3 className="mr-6 text-lg w-20">부재료</h3>
          <p>{material_sub}</p>
        </li>
        <li className="flex py-2">
          <h3 className="mr-6 text-lg w-20">카테고리</h3>
          <p>{category}</p>
        </li>
        <li className="flex py-2">
          <h3 className="mr-6 text-lg w-20">양념</h3>
          <p>{seasoning}</p>
        </li>
        <li className="flex py-2">
          <h3 className="mr-6 text-lg w-20">내용</h3>
          <p>{content}</p>
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
          className="w-40 h-12 mr-2 font-medium rounded-3xl bg-gray-200"
          onClick={onGoEdit}
        >
          수정하기
        </button>
      </div>
    </div>
  );
};

export default PostDetail;
