import React from "react";
import { Outlet } from "react-router-dom";

import NavLinks from "./NavLinks.jsx";
import { makeStyles, shorthands } from "@griffel/react";

const useClasses = makeStyles({
  button: {
    color: "yellow",
    backgroundColor: "#444444",
    ...shorthands.padding("0.7rem, 1.5rem"),
  },
});

function Main() {
  return (
    <div>
      <NavLinks />
      <Outlet />
    </div>
  );
}

export default Main;
