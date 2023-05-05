import React from "react";
import { Outlet } from "react-router-dom";

import NavLinks from "./NavLinks.jsx";
import { makeStyles, shorthands } from "@griffel/react";

const useClasses = makeStyles({
  root: {
    backgroundColor: "#cfd7df",
    ...shorthands.padding("5rem"),
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    flex: "1",
  },
});

function Main() {
  const classes = useClasses();
  return (
    <div className={classes.root}>
      <NavLinks />
      <Outlet />
    </div>
  );
}

export default Main;
