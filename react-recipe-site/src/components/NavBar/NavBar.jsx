import React, { useState, useEffect } from "react";

import "./NavBar.css";

const NavBar = () => {
  const [Auth, SetAuth] = useState(true);

  const updateAuth = () => {
    SetAuth(!Auth);
  };

  useEffect(() => {
    console.log("Route");
  }, [Auth]);

  return Auth ? (
    <nav className="navigation">
      <div className="links">
        <a href="/">Home</a>
        <a href="/browse">Browse</a>
        <a href="/manage">Manage</a>
      </div>
      <div className="buttons">
        <button onClick={() => updateAuth()}>Logout</button>
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
