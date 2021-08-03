import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { register } from "../../modules/authManager";

export const Register = () => {
  const history = useHistory();

  const [DOB, setDOB] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const registerClick = (e) => {
    e.preventDefault();
    if (password && password !== confirmPassword) {
      alert("Passwords don't match. Do better.");
    } else {
      const userProfile = { firstName, lastName, email, DateOfBirth };
      register(userProfile, password)
        .then(() => history.push("/"));
    }
 };

  return (
    <form onSubmit={registerClick}>
      <fieldset>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" type="text" onChange={e => setFirstName(e.target.value)} />
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" type="text" onChange={e => setLastName(e.target.value)} />
          <label for="email">Email</label>
          <input id="email" type="text" onChange={e => setEmail(e.target.value)} />
          <label for="dateOfBirth">Date Of Birth</label>
          <input type="date" id="dateOfBirth"  format="YYYY-MM-DD" onChange={e => setDOB(e.target.value)} />
          <label for="password">Password</label>
          <input id="password" type="password" onChange={e => setPassword(e.target.value)} />
          <label for="confirmPassword">Confirm Password</label>
          <input id="confirmPassword" type="password" onChange={e => setConfirmPassword(e.target.value)} />
          <button>Register</button>
      </fieldset>
    </form>
  );
}
