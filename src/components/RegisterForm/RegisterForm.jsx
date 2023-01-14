import { useState } from "react"

import { InputGroup } from "./InputGroup"

export function RegisterForm({ onSubmit }) {
  const [user, setUserData] = useState({email: '', password: ''});

  const setUserEmail = (event) => {
    const email = event.target.value;
    setUserData({ ...user, email })
  };
  const setUserPassword = (event) => {
    const password = event.target.value;
    setUserData({ ...user, password })
  };

  const henderlFormSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    
    const {email, password} = user;

    if (!email.includes('@') && !password.trim()) {
      return
    }
    onSubmit(user);
  }

  return (
    <>
      <h1>Please, register</h1>

      <form onSubmit={henderlFormSubmit}>
        <InputGroup
          name="email"
          label="Email"
          type="email"
          value={user.email}
          onChange={setUserEmail}
          require="true"
        />
        <InputGroup
          name="password"
          label="Password"
          type="password"
          value={user.password}
          onChange={setUserPassword}
          require="true"
        />

        {JSON.stringify(user)}

        <button type="submit">Submit</button>
      </form>
    </>
  )
}