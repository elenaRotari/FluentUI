import { useContext, useEffect } from "react";
import { ExampleContext } from "../MyContext.jsx";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { ACTION } from "../reducer/reducer.js";
import img from "/img.jpg";
import { makeStyles, shorthands } from "@griffel/react";
import {
  Button,
  Caption1,
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
  Text,
  tokens,
} from "@fluentui/react-components";
import { MoreHorizontal16Filled } from "@fluentui/react-icons";

const styles = makeStyles({
  root: {
    ...shorthands.gap("2rem"),
    display: "flex",
    flexWrap: "wrap",
  },
  img: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
  },
  card: {
    width: "400px",
    maxWidth: "100%",
    height: "fit-content",
    backgroundColor: "#e5c3cd",
    textAlign: "center",
    ...shorthands.padding("2rem"),
    display: "flex",
  },

  imgRadius: {
    ...shorthands.borderRadius("50%"),
  },
  caption: {
    display: "flex",
    flexDirection: "column",
  },
  cap: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    fontSize: "0.8rem",
  },
  btn: {
    color: "red",
  },
  header: {
    color: "red",
    fontWeight: "900",
    fontSize: "1.2rem",
  },
});

function Cards() {
  const style = styles();
  const data = useLoaderData();

  const [state, dispatch] = useContext(ExampleContext);

  useEffect(() => {
    dispatch({ type: ACTION.LOAD, payload: data });
  }, []);

  return (
    <div className={style.root}>
      {state?.map((el, id) => {
        return (
          <Card className={style.card}>
            <CardPreview className={style.img}>
              <img src={img} alt="image" className={style.imgRadius} />
            </CardPreview>
            <CardHeader
              header={
                <Text weight="semibold" className={style.header}>
                  {el.name}
                </Text>
              }
              description={
                <div className={style.caption}>
                  <Caption1 className={style.cap}>Email: {el.email}</Caption1>
                  <Caption1 className={style.cap}>Tel: {el.phone}</Caption1>
                </div>
              }
            />
            <CardFooter
              action={
                <Link to={`/${id + 1}`}>
                  <Button
                    className={style.btn}
                    appearance="transparent"
                    icon={<MoreHorizontal16Filled />}
                  />
                </Link>
              }
            ></CardFooter>
          </Card>
        );
      })}
    </div>
  );
}

export default Cards;

export const loader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return await res.json();
};
