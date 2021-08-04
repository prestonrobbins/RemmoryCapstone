import React from "react";
// import "./NavBar.css";
import { Link, Route } from "react-router-dom";
import { ChildList } from "./ChildList"
import { ParentList } from "./ParentList"
import { logout } from "../../modules/authManager"
import "./NavBar.css"

// import "bootstrap/dist/css/bootstrap.min.css";
 const NavBar = ( {isLoggedIn} ) => {
  return (
    <>
    {console.log(isLoggedIn)}
    {isLoggedIn ? 
            <nav className="navbar">
            <div id="appName">Remmory</div>
              
                <Route>
                  <Link className="nav-link" to="/">Home</Link>
                </Route>
                <div>
                    <h3 className="NavHeader">Your Parents</h3>
                </div>
                <div>
                <ParentList />
                </div>
                <div>
                    <h3 className="NavHeader">Your Children</h3>
                </div>
                <ChildList />
                <Route>
                  <Link className="nav-link" to="/addchildview">Add Child</Link>
                </Route>
                <Route>
            <Link className="nav-link" onClick={() => {logout()}} to="/login">Logout</Link>
          </Route>
        </nav>
: null} 
{/* {isLoggedIn &&
  <div>goodbye</div>
} */}
    </>)
}

export default NavBar;


