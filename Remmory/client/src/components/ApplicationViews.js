import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "./UserProfiles/Login";
import { Register } from "./UserProfiles/Register";
import { AddChildView } from "./UserProfiles/AddChildView"
import { Posts } from "./Posts/PostsParentView"
import { PostEdit } from "./Posts/EditPost"
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
        <Route path="/addchildview">
        {isLoggedIn ? <AddChildView /> : <Redirect to="/login" />}
        </Route> 
        <Route path="/postedit/:postId(\d+)">
        {isLoggedIn ? <PostEdit /> : <Redirect to="/login" />}
        </Route>
        <Route path="/PostsChildView/:childId(\d+)">
          {isLoggedIn ? <PostsChildView /> : <Redirect to="/login" />}
        </Route>
        <Route path="/PostsParentView/:parentId(\d+)">
        {isLoggedIn ? <PostsParentView /> : <Redirect to="/login" />}
        </Route>
        <Route path="/postCreate/:childId(\d+)">
        {isLoggedIn ? <PostCreate /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </main>
  );
};

export default ApplicationViews;