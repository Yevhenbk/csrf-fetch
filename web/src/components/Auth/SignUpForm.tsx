// "use client"

// import React from "react";
// import useCsrfToken from "@/hooks/useCsrfToken";
// import { handleSignUpSubmit } from "@/actions/actions";

// const SignUpForm = () => {
//   const csrfToken = useCsrfToken("http://localhost:8000/csrf/");
//   const handleSignUpWithCsrf = handleSignUpSubmit.bind(null, csrfToken);

//   return (
//     <form action={handleSignUpWithCsrf}>
//       <input
//         type="text"
//         name="username"
//         placeholder="Username"
//       />
//       <input
//         type="password"
//         name="password1"
//         placeholder="Password"
//       />
//       <input
//         type="password"
//         name="password2"
//         placeholder="Password"
//       />
//       <button type="submit">
//         Sign Up
//       </button>
//     </form>
//   );
// };

// export default SignUpForm;