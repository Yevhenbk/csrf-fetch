"use client"

import { NextPage } from "next";
import LoginForm from "../components/Auth/LoginForm";
// import SignUpForm from "@/components/SignUpForm";
import { login } from "@/actions/actions";
import { useAuthContext } from "@/store/AuthContext";
import ViewWrapper from "@/components/ViewWrapper";
import GuestUserButtons from "@/components/Auth/GuestUserButtons";
import { redirect } from "next/navigation";

const Home: NextPage = () => {
  const { user, setUser } = useAuthContext();

  // if(user.isLoggedIn) {
  //   redirect("/dashboard")
  // };

  return (
    <ViewWrapper>
      <GuestUserButtons />
    </ViewWrapper>  
  )
};

export default Home;
