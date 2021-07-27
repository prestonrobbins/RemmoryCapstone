import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./UserProfiles/Login";
import Register from "./UserProfiles/Register";
import Hello from "./Hello";



export default function ApplicationViews({ isLoggedIn }) {

  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <Hello /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      {/*<Route path="/posts" exact>*/}
      {/*  <PostList />*/}
      {/*</Route>*/}

      {/*<Route path="/posts/details/:id" exact>*/}
      {/*  <PostDetail />*/}
      {/*</Route>*/}

      {/*<Route path="/posts/add">*/}
      {/*  <PostForm />*/}
              {/*</Route>*/}
              </Switch>
    </main>
  );
};
