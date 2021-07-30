import React from "react";
// import "./NavBar.css";
import { Link, Route } from "react-router-dom";
import { ChildList } from "./ChildList"
import { ParentList } from "./ParentList"

// import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <>
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
                  <Link className="nav-link" to="/AddChild">Add Child</Link>
                </Route>
                <Route>
            <Link className="nav-link" onClick={() => { sessionStorage.clear() }} to="/login">Logout</Link>
          </Route>
                
                {/* <Route>
                <Link className="nav-link" to="/">Shopping</Link>
              </Route> */}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>)
}

export default NavBar;