import React from "react";

function Footer() {
  return (
    <nav className="footer__body navbar fixed-bottom navbar-light bg-light">
      <div className="w-100 py-2 text-center">
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        and{" "}
        <span role="img" aria-label="coffee">
          ☕
        </span>{" "}
        by <a href="https://github.com/harsh2124">Harsh Patel</a>
      </div>
    </nav>
  );
}

export default Footer;
