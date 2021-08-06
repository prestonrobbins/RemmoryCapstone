// import React, { useState } from "react";
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import { useHistory } from "react-router-dom";
// import { register } from "../../modules/authManager";

// export const AddChild = () => {
//   const history = useHistory();

//   const [firstName, setFirstName] = useState();
//   const [lastName, setLastName] = useState();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [confirmPassword, setConfirmPassword] = useState();

//   const registerClick = (e) => {
//     e.preventDefault();
//     if (password && password !== confirmPassword) {
//       alert("Passwords don't match. Do better.");
//     } else {
//       const userProfile = { firstName, lastName, displayName, imageLocation, email };
//       register(userProfile, password)
//         .then(() => history.push("/"));
//     }
//  };

//   return (
//     <Form onSubmit={registerClick}>
//       <fieldset>
//           <Label htmlFor="firstName">First Name</Label>
//           <Input id="firstName" type="text" onChange={e => setFirstName(e.target.value)} />
//           <Label htmlFor="lastName">Last Name</Label>
//           <Input id="lastName" type="text" onChange={e => setLastName(e.target.value)} />
//           <Label for="email">Email</Label>
//           <Input id="email" type="text" onChange={e => setEmail(e.target.value)} />
//           <Label for="password">Password</Label>
//           <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
//           <Label for="confirmPassword">Confirm Password</Label>
//           <Input id="confirmPassword" type="password" onChange={e => setConfirmPassword(e.target.value)} />
//           <Button>Register</Button>
//       </fieldset>
//     </Form>
//   );
// }

import React, { useEffect, useState } from "react";
import { SearchForUsersByName, getAllUsers } from '../../modules/UserProfileManager';
import { CreatePCR } from "../../modules/ParentChildRelManager"
import { Link, useHistory } from "react-router-dom";
import { AddChildCard } from "./AddChildCard"
import './AddChild.css'

export const AddChildView = () => {

    const [children, setChildren] = useState([]);
    const [search, setSearch] = useState("");

    // const getChildren = () => {
    //     if (search == '') {
    //         getAllUsers().then(e => {
    //             setChildren(e);
    //         })
    //     } else {
    //         SearchForUsersByName(search).then(children => setChildren(children));
    //     }
    // };

    const handleSearch = (evt) => {
        evt.preventDefault()
        let searchInput = evt.target.value
        setSearch(searchInput)
    };


    // useEffect(() => {
    //     getChildren();
    // }, []);


    const fetchSearch = () => {
        return SearchForUsersByName(search).then(res => setChildren(res))
    }



    return (
        <>
            <div className="AddChildCardsContainerHolder">
                <div>
                    <h4>Search For Your Child</h4>
                </div>
                <div className="container">
                    <div >
                        <input type='text' className="search" onChange={handleSearch}required id="search_box" placeholder="Search By Name" />
                        <button onClick={fetchSearch}>Search</button>
                    </div>

                </div>
            </div>
            <div>
                <div className="AddChildCardsContainer">
                    {children.map((child) => (
                        <AddChildCard child={child} key={child.id} CreatePCR={CreatePCR} />
                    ))}
                </div>
            </div>
        </>
    )
};
export default AddChildView;