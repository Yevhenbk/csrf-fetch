"use client"

import { NextPage } from "next";
import { useAuthContext } from "@/store/AuthContext";
import ViewWrapper from "@/components/ViewWrapper";
import { logout } from "@/actions/actions";
import { baseUrl } from "@/constants/constants";
import useCsrfToken from "@/hooks/useCsrfToken";
import Button from "@/components/Button";
import { redirect, useRouter } from "next/navigation";

const Private: NextPage = () => {
  const { user, setUser } = useAuthContext();
  const router = useRouter();
  const csrfToken = useCsrfToken(`${baseUrl}csrf/`);
  const handleLogout = logout.bind(null, csrfToken, setUser, router);

  if(!user.isLoggedIn) {
    redirect("/")
  };

  return (
    <ViewWrapper>
      <form action={handleLogout}>
        <Button
          type="submit"
          arialLabel="Log Out Button"
        >
          Log Out
        </Button>
      </form>
    </ViewWrapper>  
  )
};

export default Private;