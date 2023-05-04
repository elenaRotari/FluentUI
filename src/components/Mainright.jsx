import React from "react";
import { Outlet } from "react-router-dom";
import About from "./About.jsx";
import Cards from "./Cards.jsx";

function Mainright() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Mainright;
