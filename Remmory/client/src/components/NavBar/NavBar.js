import React from "react";
// import "./NavBar.css";
import { Link, Route, NavLink } from "react-router-dom";
import { ChildList } from "./ChildList"
import { ParentList } from "./ParentList"
import { logout } from "../../modules/authManager"
import { useState } from "react";
import "./NavBar.css"
import RemmoryLogo from "../../images/RemmoryLogo.png"

// import "bootstrap/dist/css/bootstrap.min.css";
 const NavBar = ( {isLoggedIn} ) => {
   const [childToggle, setChildToggle] = useState(0)

   
  return (
    <>
    {console.log(isLoggedIn)}
    {isLoggedIn ? 
            <nav className="navbar">
            <img src={RemmoryLogo} alt="Remmory Logo" className=""></img>
            <div className="NavButtonsAlign">
                  <Link className="nav-link" to="/">
                    <button className="HomeButton">Home</button>
                    </Link>
                    </div>
                    <div className="NavButtonsAlign">
                    <Route>
                      <button onClick={() => {logout()}} className="LogoutButton">logout</button>
                    </Route>
                    </div>
                <div className="NavButtonsAlign">
                    <h2 className="NavHeader">Your Parents</h2>
                </div>
                <div>
                <ParentList />
                </div>
                <div className="NavButtonsAlign">
                    <h2 className="NavHeader">Your Children</h2>
                </div>
                <ChildList childToggle={childToggle} setChildToggle={setChildToggle}/>
                <div className="NavButtonsAlign">

                <Route>
                  <Link className="nav-link" to="/addchildview">
                    <button className="AddChildButton">Add Child</button>
                  </Link>
                </Route>
                </div>
        </nav>
: null} 
{/* {isLoggedIn &&
  <div>goodbye</div>
} */}
    </>)
}

export default NavBar;


