"use client"

import React from "react";
import useCsrfToken from "@/hooks/useCsrfToken";
import { handleLoginSubmit } from "@/actions/client/actions";

const LoginForm = () => {
  const csrfToken = useCsrfToken("http://localhost:8000/csrf/");
  const handleLoginWithCsrf = handleLoginSubmit.bind(null, csrfToken);

  return (
    <form action={handleLoginWithCsrf}>
      <input
        type="text"
        name="username"
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
      />
      <button type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;