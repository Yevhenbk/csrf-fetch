"use client"

import { NextPage } from "next";
import LoginForm from "../components/Auth/LoginForm";
// import SignUpForm from "@/components/SignUpForm";
import { login } from "@/actions/actions";
import { useAuthContext } from "@/store/AuthContext";
import { redirect } from "next/navigation";

const Home: NextPage = () => {
  const { user, setUser } = useAuthContext();

  // if(user.isLoggedIn) {
  //   redirect("/dashboard")
  // };

  return (
    <main 
      className="flex items-center justify-center h-[100dvh]
      w-full"
    >
      <LoginForm
        login={login} 
      />
      {/* <button onClick={() => console.log(user)}>eqdqfqw</button> */}
      {/* <SignUpForm /> */}
    </main>
  )
};

export default Home;
