const Mypage = ({ user, logout }) => {
  
  const onLogout = () => {
    logout();
  };  

  return (
    <div className="px-4 py-6">
      <ul>
        <li className="flex py-2 border-b">
          <label className="w-32">아이디</label>
          <div>{user.username}</div>
        </li>
        <li className="flex py-2 border-b">
          <label className="w-32">닉네임</label>
          <div>{user.nickname}</div>
        </li>
        <li className="flex justify-end py-2">
          <button type="button" onClick={onLogout}>로그아웃</button>
        </li>
      </ul>
    </div>
  )
}

export default Mypage