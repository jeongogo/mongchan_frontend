import Parser from "html-react-parser";

const PostDetail = ({ post, goBack, goEdit }) => {
  const { title, material, seasoning, content, author } = post;
  post.content = post.content.replace(/\n/g, "<br/>");

  const onGoBack = () => {
    goBack();
  };

  const onGoEdit = () => {
    goEdit();
  };

  return (
    <div className="px-6 py-10">
      <h2 className="mb-4 text-center text-xl font-bold">{title}</h2>
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
          <p className="mt-2">{Parser(content)}</p>
        </li>
      </ul>
      <div className="flex justify-end text-xs text-gray-400">
        Chef. <span className="hover:underline">{author.nickname}</span>
      </div>
      <div className="flex justify-center items-center mt-8">
        <div className="ml-4">
          <button
            type="button"
            className="py-2 px-6 mr-2 text-sm font-medium rounded-3xl bg-gray-200"
            onClick={onGoBack}
          >
            뒤로가기
          </button>
          <button
            type="button"
            className="py-2 px-6 text-sm font-medium rounded-3xl bg-yellow-400"
            onClick={onGoEdit}
          >
            수정하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
