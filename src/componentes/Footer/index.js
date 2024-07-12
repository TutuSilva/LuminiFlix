import React from "react";
import "./Footer.css";

export default () => {
  return (
    <footer>
      <a href="https://github.com/TutuSilva" target="_blank">
        <p>
          Feito com{" "}
          <span role="img" aria-label="coracao">
            {" "}
            &#9825;
          </span>{" "}
          por Tullio Silva. <br /> in Minas Gerais, Brazil.
        </p>
      </a>
    </footer>
  );
};
