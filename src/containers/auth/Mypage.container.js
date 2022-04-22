import { useNavigate } from "react-router-dom";
import client from "../../lib/api/client";
import useStore from "../../modules/store";
import Mypage from "../../components/Auth/Mypage";

const MypageContainer = () => {
  const navigate = useNavigate();
  const user = useStore((state) => state.user);
  const removeUser = useStore((state) => state.removeUser);

  // Logout
  const logout = () => {
    client.post("/api/auth/logout");
    removeUser();
    navigate("/");
  };

  return <Mypage user={user} logout={logout} />
}

export default MypageContainer