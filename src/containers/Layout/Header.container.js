import React from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../modules/store";
import client from "../../lib/api/client";
import Header from "../../components/Layout/Header";

const HeaderContainer = () => {
  const user = useStore((state) => state.user);
  const removeUser = useStore((state) => state.removeUser);
  const navigate = useNavigate();
  const category = useStore((state) => state.category);

  // Logout
  const onLogout = () => {
    client.post("/api/auth/logout");
    removeUser();
    navigate("/");
  };

  return <Header user={user} onLogout={onLogout} category={category} />;
};

export default HeaderContainer;
