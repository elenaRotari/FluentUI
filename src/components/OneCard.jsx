import React from "react";
import { useLoaderData } from "react-router-dom";

function OneCard() {
  const data = useLoaderData();

  return <p>{data?.name}</p>;
}

export default OneCard;

export const card = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  return await res.json();
};
