import React from "react";
import { useAuthContext } from "@/store/AuthContext";

const useCsrfToken = (url: string) => {
  const { user, setUser } = useAuthContext();

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        credentials: "include",
      })
      const data = await response.json();
      setUser(prevState => ({
        ...prevState,
        csrfToken: data.csrfToken,
      }))
    } catch (error) {
      console.error("Error fetching CSRF token:", error)
    }
  };

  return user.csrfToken;
};

export default useCsrfToken;
