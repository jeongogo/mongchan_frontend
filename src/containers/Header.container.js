import React from "react";
import useStore from "../modules/store";
import client from "../lib/api/client";
import Header from "../components/Header";

const HeaderContainer = () => {
  const user = useStore((state) => state.user);
  const removeUser = useStore((state) => state.removeUser);

  // Logout
  const onLogout = () => {
    client.post("/api/auth/logout");
    removeUser();
  };

  return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
