import React from "react";
import { makeStyles, shorthands } from "@griffel/react";
import img from "/dci.png";

const styles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {},
});
function NavLinks() {
  const classes = styles();

  return (
    <div className={classes.root}>
      <img src={img} alt="" />
    </div>
  );
}

export default NavLinks;
