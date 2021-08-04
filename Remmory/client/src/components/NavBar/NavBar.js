import React from "react";
// import "./NavBar.css";
import { Link, Route } from "react-router-dom";
import { ChildList } from "./ChildList"
import { ParentList } from "./ParentList"
import { logout } from "../../modules/authManager"
import { useState } from "react";
import "./NavBar.css"

// import "bootstrap/dist/css/bootstrap.min.css";
 const NavBar = ( {isLoggedIn} ) => {
   const [childToggle, setChildToggle] = useState(0)

   
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
                <ChildList childToggle={childToggle} setChildToggle={setChildToggle}/>
                <Route>
                  <Link className="nav-link" to="/addchildview">Add Child</Link>
                </Route>
                <Route>
                <button onClick={() => {logout()}}>logout</button>
            {/* <Link className="nav-link" onClick={() => {logout()}}>Logout</Link> */}
          </Route>
        </nav>
: null} 
{/* {isLoggedIn &&
  <div>goodbye</div>
} */}
    </>)
}

export default NavBar;


