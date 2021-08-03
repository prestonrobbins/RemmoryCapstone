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
          <AddChildView />
        </Route> 
        <Route path="/postedit/:postId(\d+)">
          <PostEdit />
        </Route>
        <Route path="/PostsChildView/:childId(\d+)">
          <PostsChildView />
        </Route>
        <Route path="/PostsParentView/:parentId(\d+)">
          <PostsParentView />
        </Route>
        <Route path="/postCreate/:childId(\d+)">
          <PostCreate />
        </Route>
      </Switch>
    </main>
  );
};

export default ApplicationViews;