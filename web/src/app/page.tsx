

import { NextPage } from "next";
import LoginForm from "./components/LoginForm";

const Home: NextPage = () => {
  return (
    <main 
      className="flex min-h-screen flex-col items-center 
      justify-between p-24"
    >
      <LoginForm />
    </main>
  )
};

export default Home;
