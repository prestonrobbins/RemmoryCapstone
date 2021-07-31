import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "./UserProfiles/Login";
import { Register } from "./UserProfiles/Register";
import { AddChild } from "./UserProfiles/AddChild"
import { Posts } from "./Posts/PostsParentView"
import { EditPost } from "./Posts/EditPost"
import { PostCreate } from "./Posts/PostCreate"
import { PostsParentView } from "./Posts/PostsParentView"
import Home from "./Home";



const ApplicationViews = ({ isLoggedIn }) => {

  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <Home /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        {/* <Route path="/addchild">
          <AddChild />
        </Route>
        <Route path="/editprofile">
          <EditProfile />
        </Route>
         <Route path="/postCreate">
          <PostCreate />
        </Route>
        <Route path="/editpost">
          <EditPost />
        </Route> */}
        <Route path="/PostsParentView/:id(\d+)">
          <PostsParentView />
        </Route>
      </Switch>
    </main>
  );
};

export default ApplicationViews;