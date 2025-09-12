"use client"

import { useAuthContext } from "@/store/AuthContext";
import ViewWrapper from "@/components/ViewWrapper";
import { login } from "@/actions/actions";
import LoginForm from "@/components/Auth/LoginForm";
import { redirect } from "next/navigation";

const Login = () => {
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