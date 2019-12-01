import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <div>
      <h5>NAVBAR</h5>
      <ul>
        <li>
          <Link to="/Scores">Scoreboard</Link>
        </li>
        <li>
          <Link to="/Rules">Rules</Link>
        </li>
        <li>
          <Link to="/Start">New Game</Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default NavBar;
