"use client"

import { NextPage } from "next";
import { useAuthContext } from "@/store/AuthContext";
import ViewWrapper from "@/components/ViewWrapper";
import { signup } from "@/actions/actions";
import SignUpForm from "@/components/Auth/SignUpForm";
import { redirect } from "next/navigation";

const SignUp: NextPage = () => {
  const { user } = useAuthContext();

  if(user.isLoggedIn) {
    redirect("/private")
  };

  return (
    <ViewWrapper>
      <SignUpForm signup={signup} />
    </ViewWrapper>  
  )
};

export default SignUp;