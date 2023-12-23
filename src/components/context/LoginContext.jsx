import { createContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const localData = JSON.parse(localStorage.getItem("token")) || [];
  const [token, setToken] = React.useState(localData);
  const loginRef = React.useRef();
  const passRef = React.useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    (async function () {
      const response = await fetch(
        import.meta.env.VITE_API_URL + "/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: loginRef.current.value,
            password: passRef.current.value,
          }),
        }
      );
      try {
        if (response.ok) {
          const data = await response.json();
          setToken(data);
          localStorage.setItem("token", JSON.stringify(data));
          toast.success("Success Notification !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          toast.error("Error Notification !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      } catch (error) {
        console.error(error);
      }
    })();
  };

  return (
    <LoginContext.Provider
      value={{ loginRef, passRef, handleSubmit, token, setToken }}
    >
      {children}
    </LoginContext.Provider>
  );
};
