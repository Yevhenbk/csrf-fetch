import { AuthProps } from "@/types/auth";
import { baseUrl } from "@/constants/constants";

export const login: AuthProps = async (
  csrfToken, 
  setUser,
  formData
) => {
  try {
    const response = await fetch(`${baseUrl}login/`, {
      method: "POST",
      headers: {
        "X-CSRFToken": csrfToken,
      },
      body: formData,
      credentials: "include",
    })
    const data = await response.json();
    if (data.success) {
      setUser(prevState => ({
        ...prevState,
        isLoggedIn: true,
      }))
    }
  } catch (error) {
    console.error("Error logging in:", error)
  }
};

export const signup: AuthProps = async (
  csrfToken, 
  setUser,
  formData
) => {
  try {
    const response = await fetch(`${baseUrl}signup/`, {
      method: "POST",
      headers: {
        "X-CSRFToken": csrfToken,
      },
      body: formData,
      credentials: "include",
    })
    const data = await response.json();
    if (data.success) {
      setUser(prevState => ({
        ...prevState,
        isLoggedIn: true,
      }))
    } 
  } catch (error) {
    console.error("Error logging in:", error)
  }
};

export const logout: AuthProps = async (
  csrfToken, 
  setUser
) => {
  try {
    const response = await fetch(`${baseUrl}logout/`, {
      method: "POST",
      headers: {
        "X-CSRFToken": csrfToken,
      },
      credentials: "include",
    })
    await response.json();
    setUser(prevState => ({
      ...prevState,
      isLoggedIn: false,
    }))
  } catch (error) {
    console.error("Error logging out:", error)
  }
}
