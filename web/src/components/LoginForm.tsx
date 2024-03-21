"use client"

import React from "react";
import { useAuthContext } from "@/store/AuthContext";
import useCsrfToken from "@/hooks/useCsrfToken";
import { AuthProps } from "@/types/auth";
import { baseUrl } from "@/constants/constants";

interface LoginFormProps {
  login: AuthProps
}

const LoginForm: React.FC<LoginFormProps> = ({ login }) => {
  const { setUser } = useAuthContext();
  const csrfToken = useCsrfToken(`${baseUrl}csrf/`);
  const handleLogin = login.bind(null, csrfToken, setUser);

  return (
    <form action={handleLogin}>
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
    </form>
  );
};

export default LoginForm;