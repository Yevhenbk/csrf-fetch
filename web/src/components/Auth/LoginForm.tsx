"use client"

import React from "react";
import { useAuthContext } from "@/store/AuthContext";
import useCsrfToken from "@/hooks/useCsrfToken";
import { AuthProps } from "@/types/auth";
import { baseUrl } from "@/constants/constants";
import Button from "../Button";
import Input from "../Input";

interface LoginFormProps {
  login: AuthProps
}

const LoginForm: React.FC<LoginFormProps> = ({ login }) => {
  const { setUser } = useAuthContext();
  const csrfToken = useCsrfToken(`${baseUrl}csrf/`);
  const handleLogin = login.bind(null, csrfToken, setUser);

  return (
    <form 
      action={handleLogin}
      className="flex flex-col gap-4"
    >
      <Input
        type="text"
        name="username"
        placeholder="Username"
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
      />
      <Button
        type="submit"
        arialLabel="Submit Form"
      >
        Submit
      </Button>
    </form>
  );
};

export default LoginForm;