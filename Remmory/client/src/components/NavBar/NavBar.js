import React from "react";
// import "./NavBar.css";
import { Link, Route } from "react-router-dom";
import { ChildList } from "./ChildList"
import { ParentList } from "./ParentList"
import { logout } from "../../modules/authManager"

// import "bootstrap/dist/css/bootstrap.min.css";
 const NavBar = ( {isLoggedIn} ) => {
  return (
    <>
    {console.log(isLoggedIn)}
    {isLoggedIn ? 
      <div className="navElement">
        <div id="headerTop">
            <div className = "logo">
            </div>
            
          <div>
          
            <div id="appName">Remmory</div>
          </div>
        </div>
        <nav className="navbar">
          <div>
            <ul className="navList">
              <li className="nav-item">
                <Route>
                  <Link className="nav-link" to="/">Home</Link>
                </Route>
                <div>
                    <p>Your Parents</p>
                </div>
                <div>
                <ParentList />
                </div>
                <Route>
                  <Link className="nav-link" to="/Profile">Your Profile</Link>
                </Route>
                <div>
                    <p>Your Children</p>
                </div>
                <ChildList />
                <Route>
                  <Link className="nav-link" to="/addchildview">Add Child</Link>
                </Route>
                <Route>
            <Link className="nav-link" onClick={() => {logout()}} to="/login">Logout</Link>
          </Route>
              </li>
            </ul>
          </div>
        </nav>
      </div>
: null} 
{/* {isLoggedIn &&
  <div>goodbye</div>
} */}
    </>)
}

export default NavBar;


