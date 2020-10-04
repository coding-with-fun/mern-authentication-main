import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Navbar() {
  const { userData, setUserData } = useContext(UserContext);
  return <div></div>;
}

export default Navbar;
