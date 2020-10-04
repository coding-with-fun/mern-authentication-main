import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import UserContext from "../context/UserContext";

function Navbar() {
  const { userData, setUserData } = useContext(UserContext);
  return (
    <nav className="navbar__body navbar fixed-top navbar-expand navbar-light bg-light">
      <Link className="navbar-brand pl-5" to="/">
        <img src={logo} alt="Logo" />
      </Link>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <div
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {userData.isAuthenticated ? "Harsh" : "User"}
          </div>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="navbarDropdown"
          >
            {userData.isAuthenticated ? (
              <Fragment>
                <Link className="dropdown-item" to="/profile">
                  Profile
                </Link>
                <Link className="dropdown-item" to="/">
                  Sign Out
                </Link>
              </Fragment>
            ) : (
              <Fragment>
                <Link className="dropdown-item" to="/signin">
                  Sign In
                </Link>
                <Link className="dropdown-item" to="/signup">
                  Sign Up
                </Link>
              </Fragment>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
