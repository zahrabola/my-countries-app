import React from "react";
import { FaMoon } from "react-icons/fa";
const Header= () => {

return (
  <header className="header">
    <div>
      <h1>Where in the world?</h1>
    </div>
    <div>
      <FaMoon size="1.8em" /> Dark mode
    </div>
  </header>
);

}

export default Header; 