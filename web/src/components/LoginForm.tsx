"use client"

import React from "react";
import useCsrfToken from "@/hooks/useCsrfToken";
import { UserStateData } from "@/types/userData";
import { AuthProps } from "@/types/auth";

interface LoginFormProps {
  user: UserStateData,
  setUser: React.Dispatch<React.SetStateAction<UserStateData>>,
  login: AuthProps
}

const LoginForm: React.FC<LoginFormProps> = ({ 
  user,
  setUser,
  login 
}) => {
  const csrfToken = useCsrfToken("http://localhost:8000/csrf/");
  const handleLoginWithCsrf = login.bind(null, csrfToken, setUser);

  return (
    <form action={handleLoginWithCsrf}>
      <input
        type="text"
        name="username"
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
      />
      <button type="submit">
        Login
      </button>
      <button onClick={() => console.log(user)}>eqdqfqw</button>
    </form>
  );
};

export default LoginForm;