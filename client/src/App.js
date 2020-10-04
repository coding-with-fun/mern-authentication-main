import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from "./components/404";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import UserContext from "./context/UserContext";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
    isAuthenticated: false,
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
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
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
