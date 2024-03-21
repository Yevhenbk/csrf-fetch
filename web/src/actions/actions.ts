import { AuthProps } from "@/types/auth";
import { baseUrl } from "@/constants/constants";

export const login: AuthProps = async (
  csrfToken, 
  setUser,
  router,
  formData
) => {
  setUser(prevState => ({
    ...prevState,
    isLoading: true
  }))
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
      router.push("/");
      setUser(prevState => ({
        ...prevState,
        isLoggedIn: data.isLoggedIn,
        isLoading: false
      }))
    }
  } catch (error) {
    console.error("Error logging in:", error)
  }
};

export const signup: AuthProps = async (
  csrfToken, 
  setUser,
  router,
  formData
) => {
  setUser(prevState => ({
    ...prevState,
    isLoading: true
  }))
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
        isLoggedIn: data.isLoggedIn,
        isLoading: false
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
  setUser(prevState => ({
    ...prevState,
    isLoading: true
  }))
  try {
    const response = await fetch(`${baseUrl}logout/`, {
      method: "POST",
      headers: {
        "X-CSRFToken": csrfToken,
      },
      credentials: "include",
    })
    const data = await response.json();
    console.log(data)
    if (data.success) {
      setUser(prevState => ({
        ...prevState,
        isLoggedIn: data.isLoggedIn,
        isLoading: false
      }))
    } 
  } catch (error) {
    console.error("Error logging out:", error)
  }
}
