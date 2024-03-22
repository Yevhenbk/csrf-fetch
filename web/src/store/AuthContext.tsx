"use client"

import React from "react";
import { useUserState } from "@/hooks/useUserState";
import { UserStateData } from "@/types/userData";

type checkLoginStatusProps = {
  (
    setUser: React.Dispatch<React.SetStateAction<UserStateData>>
  ): Promise<void>
}

type AuthContextProps = {
  user: UserStateData,
  setUser: React.Dispatch<React.SetStateAction<UserStateData>>
};

type AuthContextProviderProps = {
  children: React.ReactNode
};

export const AuthContext = React.createContext<AuthContextProps | null>(null);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useUserState();

  React.useEffect(() => {
    checkLoginStatus(setUser);
  },[]);

  if (user.isLoading) return <p>Loading...</p>

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
};

export const useAuthContext = () => {
  const context = React.useContext(AuthContext);
  if (context === null) {
    throw new Error (
      "useAuthContext must be sed within a AuthContextProvider"
    )
  };

  return context;
};

export const checkLoginStatus: checkLoginStatusProps = async (setUser) => {
  setUser(prevState => ({
    ...prevState,
    isLoading: true
  }))
  try {
    const response = await fetch(`http://localhost:8000/check-login-status/`, {
      method: "GET",
      credentials: "include", 
    })
    const data = await response.json();
    setUser(prevState => ({
      ...prevState,
      isLoggedIn: data.isLoggedIn,
      isLoading: false
    }))
    console.log(data.isLoggedIn)
  } catch (error) {
    console.error("Error checking login status:", error)
  }
};