import React from "react";
import { LoginContext } from "../context/LoginContext";
import { ToastContainer } from "react-toastify";

const Dashboard = () => {
  const { handleSubmit, loginRef, passRef } = React.useContext(LoginContext);
  React.useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <form onSubmit={(evt) => handleSubmit(evt)}>
        <input ref={loginRef} type="email" placeholder="Email" /> <br /> <br />
        <input
          ref={passRef}
          type="password"
          placeholder="Password"
        /> <br /> <br />
        <button>Login</button>
      </form>
      <br />
      <button>Create Account</button>
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
