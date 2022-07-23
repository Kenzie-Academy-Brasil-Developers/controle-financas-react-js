import { useState } from "react";
import Homepage from "./components/Homepage";
import LandingPage from "./components/LandingPage";

import "./assets/css/reset.css";
import "./css/base.css";
import "./css/App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  function handleLogin() {
    setLoggedIn(!loggedIn);
  }

  return (
    <div className="App">
      {loggedIn ? (
        <Homepage handler={handleLogin}/>
      ) : (
        <LandingPage handler={handleLogin} />
      )}
    </div>
  );
}

export default App;
