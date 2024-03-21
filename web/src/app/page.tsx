"use client"

import { NextPage } from "next";
import LoginForm from "../components/LoginForm";
// import SignUpForm from "@/components/SignUpForm";
import { login } from "@/actions/actions";
import { useAuthContext } from "@/store/AuthContext";
import { redirect } from "next/navigation";

const Home: NextPage = () => {
  const { user, setUser } = useAuthContext();

  if(user.isLoggedIn) {
    redirect("/dashboard")
  }

  return (
    <main 
      className="flex min-h-screen flex-col items-center 
      justify-between p-24"
    >
      <LoginForm 
        user={user} 
        setUser={setUser} 
        login={login} 
      />
      {/* <button onClick={() => console.log(user)}>eqdqfqw</button> */}
      {/* <SignUpForm /> */}
    </main>
  )
};

export default Home;
