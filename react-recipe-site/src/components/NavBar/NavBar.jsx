import React, { useState } from "react";

import "./NavBar.css";

const NavBar = () => {
  const [Auth, SetAuth] = useState(true);

  const updateAuth = () => {
    SetAuth = !Auth;
  };

  return Auth ? (
    <nav className="navigation">
      <div className="links">
        <a href="/">Home</a>
        <a href="/browse">Browse</a>
        <a href="/manage">Manage</a>
      </div>
      <div className="buttons">
        <button>Logout</button>
      </div>
    </nav>
  ) : (
    <nav className="navigation">
      <div className="links">
        <a href="/">Home</a>
        <a href="/browse">Browse</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default NavBar;
