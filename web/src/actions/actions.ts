import { AuthProps } from "@/types/auth";

export const login: AuthProps = async (
  csrfToken, 
  setUser,
  formData
) => {
  try {
    const response = await fetch(`http://localhost:8000/login/`, {
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
      }))
    }; 
  } catch (error) {
    console.error("Error logging in:", error)
  };
};

// export const handleSignUpSubmit: HandleSubmitProps = async (csrfToken: string, formData: FormData) => {
//   try {
//     const response = await fetch(`http://localhost:8000/signup/`, {
//       method: "POST",
//       headers: {
//         "X-CSRFToken": csrfToken,
//       },
//       body: formData,
//       credentials: "include",
//     })
//     const data = await response.json()
//     if (data.success) {
//       console.log(data)
//     } 
//   } catch (error) {
//     console.error("Error logging in:", error)
//   }
// };