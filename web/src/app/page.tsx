"use client"

import { NextPage } from "next";
import { useAuthContext } from "@/store/AuthContext";
import ViewWrapper from "@/components/ViewWrapper";
import GuestUserButtons from "@/components/Auth/GuestUserButtons";
import { redirect } from "next/navigation";

const Home: NextPage = () => {
  const { user } = useAuthContext();

  if(user.isLoggedIn) {
    redirect("/private")
  };

  return (
    <ViewWrapper>
      <GuestUserButtons />
    </ViewWrapper>  
  )
};

export default Home;
