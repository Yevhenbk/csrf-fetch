import React from "react"
import { UserStateData } from "@/types/userData"

export const useUserState = (): [
  UserStateData, 
  React.Dispatch<React.SetStateAction<UserStateData>>
] => {
  const [user, setUser] = React.useState<UserStateData>({
    username: "",
    password: "",
    csrfToken: "",
    isLoggedIn: null,
    isLoading: true
  })

  return [user, setUser]
}