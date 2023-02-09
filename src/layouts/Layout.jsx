import React from "react";
import { useLocation } from "react-router";
import { LayoutInSide } from "./LayoutInSide";
import { LayoutOutSide } from "./LayoutOutSide";

const Layout = () => {
  const location = useLocation();

  const authPages =
    location.pathname === "/sign-in" || location.pathname === "/sign-up"
      ? true
      : false;

  return <>{authPages ? <LayoutOutSide /> : <LayoutInSide />}</>;
};

export default Layout;
