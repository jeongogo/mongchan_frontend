import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../modules/store";
import client from "../../lib/api/client";
import Login from "../../components/Auth/Login";

const LoginContainer = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const setUser = useStore((state) => state.setUser);

  const onSubmit = async (data) => {
    try {
      const res = await client.post("/api/auth/login", data);
      setUser(res.data);
      navigate("/");
    } catch (err) {
      setError("아이디 또는 비밀번호가 일치하지 않습니다.");
      console.log(err);
    }
  };

  const kakaoLogin = (res) => {
    console.log(res);
    navigate("/");
  }

  return (
    <>
      <Login onSubmit={onSubmit} error={error} setError={setError} kakaoLogin={kakaoLogin} />
    </>
  );
};

export default LoginContainer;
