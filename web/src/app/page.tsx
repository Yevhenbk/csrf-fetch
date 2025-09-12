"use client"

import { useAuthContext } from "@/store/AuthContext";
import ViewWrapper from "@/components/ViewWrapper";
import GuestUserButtons from "@/components/Auth/GuestUserButtons";
import { redirect } from "next/navigation";

const Home = () => {
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
