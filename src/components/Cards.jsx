import { useContext, useEffect } from "react";
import { ExampleContext } from "../MyContext.jsx";
import { useLoaderData } from "react-router-dom";
import { ACTION } from "../reducer/reducer.js";

function Cards() {
  const data = useLoaderData();
  console.log(data);
  const [state, dispatch] = useContext(ExampleContext);
  console.log(state);
  useEffect(() => {
    dispatch({ type: ACTION.LOAD, payload: data });
  }, []);
  return (
    <div>
      {state?.map((el) => {
        return (
          <>
            <h3>{el.name}</h3>
            <p>{el.email}</p>
            <p>{el.phone}</p>
            <p>{el.address.city}</p>
          </>
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
