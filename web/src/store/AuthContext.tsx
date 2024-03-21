"use client"

import React from "react";
import { useUserState } from "@/hooks/useUserState";
import { UserStateData } from "@/types/userData";

type AuthContextProps = {
  user: UserStateData,
  setUser: React.Dispatch<React.SetStateAction<UserStateData>>
};

export const AuthContext = React.createContext<AuthContextProps | null>(null);

type AuthContextProviderProps = {
  children: React.ReactNode
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useUserState();

  const checkLoginStatus = async () => {
    try {
      const response = await fetch(`http://localhost:8000/check-login-status/`, {
        method: "GET",
        credentials: "include", 
      })
      const data = await response.json()
      setUser(prevState => ({
        ...prevState,
        isLoggedIn: data.isLoggedIn,
      }))
    } catch (error) {
      console.error("Error checking login status:", error)
    }
  };

  React.useEffect(() => {
    checkLoginStatus();
  },[]);

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