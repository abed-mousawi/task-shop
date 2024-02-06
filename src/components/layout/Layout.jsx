import React from "react";
import Header from "../header/Header";
import NavbarDown from "../navbar-down/NavbarDown";

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <NavbarDown />
    </div>
  );
}

export default Layout;
