import { makeStyles, shorthands, mergeClasses } from "@griffel/react";
import { Link } from "react-router-dom";
import img from "/img.jpg";

const useClasses = makeStyles({
  root: {
    textDecorationLine: "none",
  },
  img: {
    width: "50px",
    objectFit: "cover",
    height: "50px",
    ...shorthands.borderRadius("50%"),
  },
  nav: {
    backgroundColor: "#444444",
    ...shorthands.padding("10px"),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ul: {
    display: "flex",
    ...shorthands.gap("2rem"),
    ...shorthands.padding("2rem"),
  },
  list: {
    listStyleType: "none",
  },
  link: {
    color: "white",
    fontSize: "1.3rem",
    fontWeight: "900",

    ":focus": {
      color: "red",
    },
  },
});
function NavBar() {
  const classes = useClasses();
  const mergeclasses1 = mergeClasses(classes.root, classes.link);
  return (
    <div className={classes.nav}>
      <img src={img} alt="img" className={classes.img} />
      <ul className={classes.ul}>
        <li className={classes.list}>
          <Link className={mergeclasses1} to="/about">
            About
          </Link>
        </li>
        <li className={classes.list}>
          <Link className={mergeclasses1} to="/cards">
            Cards
          </Link>
        </li>
        <li className={classes.list}>
          <Link className={mergeclasses1} to="/contacts">
            Contacts
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
