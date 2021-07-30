import React from "react"
import { Route, Redirect } from 'react-router';
import { ApplicationViews } from './components/ApplicationViews';
import { NavBar } from './components/nav/NavBar'
import {Login} from './components/auth/Login'
import {Register} from './components/auth/Register'
import {userStorageKey} from "./components/auth/authSettings"
// import './Remmory.css';
export const Remmory = () => {
  return <>
    <Route
      render={() => {
        if (sessionStorage.getItem(userStorageKey)) {
          return (
            <div ClassName="remmory">
              <NavBar />
              <div className="applicationView">
              <ApplicationViews />
              </div> 
            </div>
          )
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>  
    </>
}