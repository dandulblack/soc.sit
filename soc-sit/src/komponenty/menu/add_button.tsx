import React, { useState } from "react";
import "./menu.css";
import Add_menu from "../add_menu/main";

function Add_button() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    console.log("Button clicked");
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <button className="menu__button" onClick={handleClick}>
        Přidat +
      </button>
      {showMenu && <Add_menu />}
    </div>
  );
}

export default Add_button;