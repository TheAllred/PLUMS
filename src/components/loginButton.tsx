import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="absolute top-0 right-0"
    >
      Log In
    </button>
  );
};

export default LoginButton;
