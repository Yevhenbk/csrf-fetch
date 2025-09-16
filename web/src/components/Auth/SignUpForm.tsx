"use client"

import React from "react";
import { useAuthContext } from "@/store/AuthContext";
import useCsrfToken from "@/hooks/useCsrfToken";
import { AuthProps } from "@/types/auth";
import { baseUrl } from "@/constants/constants";
import Button from "../Button";
import Input from "../Input";

interface SignUpFormProps {
  signup: AuthProps
};

const SignUpForm: React.FC<SignUpFormProps> = ({ signup }) => {
  const { setUser } = useAuthContext();
  const csrfToken = useCsrfToken(`${baseUrl}csrf/`);
  const handleSignUp = signup.bind(null, csrfToken, setUser);

  return (
    <form 
      action={handleSignUp}
      className="flex flex-col gap-4"
    >
      <Input
        type="text"
        name="username"
        placeholder="Username"
      />
      <Input
        type="password"
        name="password1"
        placeholder="Password"
      />
      <Input
        type="password"
        name="password2"
        placeholder="Password"
      />
      <Button
        type="submit"
        arialLabel="Submit Form"
      >
        Sign Up
      </Button>
    </form>
  )
};

export default SignUpForm;