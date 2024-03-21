"use client"

import { NextPage } from "next";
import { useAuthContext } from "@/store/AuthContext";
import useCsrfToken from "@/hooks/useCsrfToken";
import { logout } from "@/actions/actions";
import { baseUrl } from "@/constants/constants";
import ViewWrapper from "@/components/ViewWrapper";
import GuestUserButtons from "@/components/Auth/GuestUserButtons";
import Button from "@/components/Button";
import { redirect, useRouter } from "next/navigation";

const Home: NextPage = () => {
  const { user, setUser } = useAuthContext();
  const router = useRouter();
  const csrfToken = useCsrfToken(`${baseUrl}csrf/`);
  const handleLogout = logout.bind(null, csrfToken, setUser, router);

  // if(user.isLoggedIn) {
  //   redirect("/private")
  // };

  return (
    <ViewWrapper>
      {user.isLoggedIn ?
        <form action={handleLogout}>
          <Button
            type="submit"
            arialLabel="Log Out Button"
          >
            Log Out
          </Button> 
        </form>
      : <GuestUserButtons />}
    </ViewWrapper>  
  )
};

export default Home;
