import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import UserContext from "./context/UserContext";
import PageNotFound from "./components/404";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
    isAuthenticated: true,
  });

  return (
    <Fragment>
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Body />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          <Footer />
        </UserContext.Provider>
      </Router>
    </Fragment>
  );
}

export default App;
