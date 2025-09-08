import { AuthProps } from "@/types/auth";
import { baseUrl } from "@/constants/constants";
import { checkLoginStatus } from "@/store/AuthContext";

export const login: AuthProps = async (
  csrfToken, 
  setUser,
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
      setUser(prevState => ({
        ...prevState,
        isLoggedIn: data.isLoggedIn,
        isLoading: false
      }));
      checkLoginStatus(setUser);
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
      }));
      checkLoginStatus(setUser);
    } else {
      // Log backend errors for debugging
      console.error("Signup error:", data.errors || data.message);
      alert("Signup failed: " + (data.message || JSON.stringify(data.errors)));
    }
  } catch (error) {
    console.error("Error signing up:", error)
    alert("Signup failed: " + error);
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
    if (data.success) {
      setUser(prevState => ({
        ...prevState,
        isLoggedIn: data.isLoggedIn,
        isLoading: false
      }));
      checkLoginStatus(setUser);
    } 
  } catch (error) {
    console.error("Error logging out:", error)
  }
};
