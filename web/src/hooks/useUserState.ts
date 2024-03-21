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
  isLoggedIn: null
  })

  return [user, setUser]
}