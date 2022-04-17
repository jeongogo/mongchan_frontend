import { useNavigate } from "react-router-dom";
import client from "../../lib/api/client";
import Register from "../../components/Auth/Register";

const RegisterContainer = () => {
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await client.post("/api/auth/register", data);
      alert("회원가입이 완료되었습니다.");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-xl m-auto mt-32 py-6 relative">
      <Register onSubmit={onSubmit} />
    </div>
  );
};

export default RegisterContainer;
