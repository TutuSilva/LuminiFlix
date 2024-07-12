import React from "react";
import "./Header.css";

export default ({black}) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img src="https://i.imgur.com/aDsjW78.png" alt="logo LuminiFlix" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img
            src="https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg"
            alt="adicionar usuario"
          />
        </a>
      </div>
    </header>
  );
};
