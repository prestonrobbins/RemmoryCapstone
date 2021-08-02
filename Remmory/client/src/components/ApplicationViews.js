import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "./UserProfiles/Login";
import { Register } from "./UserProfiles/Register";
import { AddChild } from "./UserProfiles/AddChild"
import { Posts } from "./Posts/PostsParentView"
import { EditPost } from "./Posts/EditPost"
import { PostCreate } from "./Posts/PostCreate"
import { PostsParentView } from "./Posts/PostsParentView"
import { PostsChildView } from "./Posts/PostsChildView"

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
        <Route path="/editpost">
          <EditPost />
        </Route> */}
        <Route path="/PostsChildView/:childId(\d+)">
          <PostsChildView />
        </Route>
        <Route path="/PostsParentView/:parentId(\d+)">
          <PostsParentView />
        </Route>
        <Route path="/postCreate">
          <PostCreate />
        </Route>
      </Switch>
    </main>
  );
};

export default ApplicationViews;