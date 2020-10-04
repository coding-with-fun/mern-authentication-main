import React, { Fragment, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserContext from "./context/UserContext";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  return (
    <Fragment>
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Navbar />
        </UserContext.Provider>
      </Router>
    </Fragment>
  );
}

export default App;
