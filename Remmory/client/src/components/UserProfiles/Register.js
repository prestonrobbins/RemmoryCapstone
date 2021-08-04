import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { register } from "../../modules/authManager";

export const Register = () => {
  const history = useHistory();

  const [dateOfBirth, setDateOfBirth] = useState();
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
      const userProfile = { firstName, lastName, email, dateOfBirth };
      register(userProfile, password)
        .then((res) => history.push("/addchildview"));
    }
 };

  return (
    <Form onSubmit={registerClick}>
      <fieldset>
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" type="text" onChange={e => setFirstName(e.target.value)} />
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" type="text" onChange={e => setLastName(e.target.value)} />
          <Label for="email">Email</Label>
          <Input id="email" type="text" onChange={e => setEmail(e.target.value)} />
          <Label for="dateOfBirth">Date Of Birth</Label>
          <Input type="date" id="dateOfBirth"  format="YYYY-MM-DD" onChange={e => setDateOfBirth(e.target.value)} />
          <Label for="password">Password</Label>
          <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
          <Label for="confirmPassword">Confirm Password</Label>
          <Input id="confirmPassword" type="password" onChange={e => setConfirmPassword(e.target.value)} />
          <Button>Register</Button>
      </fieldset>
    </Form>
  );
}
