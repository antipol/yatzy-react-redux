import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <div>
      <h5>NAVBAR</h5>
      <ul>
        <li>
          <Link to="/scores">Scoreboard</Link>
        </li>
        <li>
          <Link to="/rules">Rules</Link>
        </li>
        <li>
          <Link to="/start">New Game</Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default NavBar;
