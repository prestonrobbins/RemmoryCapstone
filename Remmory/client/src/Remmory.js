// import React from "react"
// import { Route, Redirect } from 'react-router';
// import { ApplicationViews } from './components/ApplicationViews';
// import { NavBar } from './components/nav/NavBar'
// import { Login } from './components/UserProfiles/Login'
// import { Register } from './components/UserProfiles/Register'
// import { userStorageKey } from "./components/auth/authSettings"
// // import './Remmory.css';
// export const Remmory = () => {
//   return <>
//     <Route
//       render={() => {
//         if (sessionStorage.getItem(userStorageKey)) {
//           return (
//             <div ClassName="remmory">
//               <NavBar />
//               <div className="applicationView">
//               <ApplicationViews />
//               </div> 
//             </div>
//           )
//         } else {
//           return <Redirect to="/login" />;
//         }
//       }}
//     />
//     <Route path="/login">
//       <Login />
//     </Route>
//     <Route path="/register">
//       <Register />
//     </Route>  
//     </>
// }

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Spinner } from 'reactstrap';
import NavBar from "./components/NavBar/NavBar";
import ApplicationViews from "./components/ApplicationViews";
import { onLoginStatusChange } from "./modules/authManager";

const Remmory = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    onLoginStatusChange(setIsLoggedIn);
  }, []);

  if (isLoggedIn === null) {
    return <Spinner className="app-spinner dark" />;
  }

  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} />
      <ApplicationViews isLoggedIn={isLoggedIn} />
    </Router>
  );
}

export default Remmory;