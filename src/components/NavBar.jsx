import { makeStyles, shorthands } from "@griffel/react";
import { Link } from "react-router-dom";
import img from "/img.jpg";

const useClasses = makeStyles({
  img: {
    width: "50px",
    objectFit: "cover",
    height: "50px",
    ...shorthands.borderRadius("50%"),
  },
  nav: {
    backgroundColor: "#444444",
    ...shorthands.padding("5px"),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  list: {
    color: "white",
    listStyleType: "none",
  },
});
function NavBar() {
  const classes = useClasses();
  return (
    <div className={classes.nav}>
      <img src={img} alt="img" className={classes.img} />
      <ul>
        <Link className={classes.list} to="/about">
          About
        </Link>
        <Link className={classes.list} to="/cards">
          Cards
        </Link>
        <Link className={classes.list} to="/contacts">
          Contacts
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;
