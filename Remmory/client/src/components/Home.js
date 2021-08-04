import React from "react";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <>
      <h2>Welcome "user", start your family tree by adding a child.</h2>
      <Link to={`/addchildview`}>
        <button className="HomeAddButton">Add Your Child
        </button>
      </Link>
      {/* <h2>Scroll down to learn more about how Remmory works</h2> */}

    </>
  );
}