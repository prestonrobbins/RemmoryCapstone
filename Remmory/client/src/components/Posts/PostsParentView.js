// import "./NavBar.css";
import { Link, Route } from "react-router-dom";
import React from "react";
import { PostParentList } from "./PostParentList"
import "./PostView.css"



export const PostsParentView = () => {
  return (
    <>
    <div className="ViewContainer">
      <div className="userinfo">
      </div>
      <PostParentList />
      </div>
    </>
    )
}

