"use client"

import { NextPage } from "next";
import { useAuthContext } from "@/store/AuthContext";
import ViewWrapper from "@/components/ViewWrapper";
import { login } from "@/actions/actions";
import LoginForm from "@/components/Auth/LoginForm";
import { redirect } from "next/navigation";

const Login: NextPage = () => {
  const { user } = useAuthContext();

  if(user.isLoggedIn) {
    redirect("/private")
  };

  return (
    <ViewWrapper>
      <LoginForm login={login} />
    </ViewWrapper>  
  )
};

export default Login;