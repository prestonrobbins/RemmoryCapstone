import React from "react";
import { Link } from "react-router-dom";
import './Home.css'


export default function Home() {
  return (
    <div className="HomeHolderHolder">
    <div className="HomeHolder">
      <h1 className="HomeHeader">Save your memories from the past, for the future.</h1>
      <h3 className="HomeHeader">Start your family tree by adding your child.</h3>
      <Link to={`/addchildview`}>
        <button className="HomeAddButton">Add Your Child
        </button>
      </Link>
    </div>
    </div>
    
  );
}