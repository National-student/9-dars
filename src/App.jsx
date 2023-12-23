import "./App.css";
import { Dashboard, Public } from "./components";
import { LoginContext } from "./components/context/LoginContext";
import React from "react";

function App() {
  const { token } = React.useContext(LoginContext);

  if (token?.token) {
    return <Public />;
  } else {
    return <Dashboard />;
  }
}

export default App;
