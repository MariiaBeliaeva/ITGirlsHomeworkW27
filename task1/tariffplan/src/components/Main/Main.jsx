import React from "react";
import Tariffcard from "../Tariffcard/Tariffcard";
import Theme1 from "../../styles/Theme1.module.css";
import Theme2 from "../../styles/Theme2.module.css";
import Theme3 from "../../styles/Theme3.module.css";
import Theme4 from "../../styles/Theme4.module.css";
import { tariffs } from "./Tariffs.js";

function Main(props) {
  const themes = [Theme1, Theme2, Theme3, Theme4];
  return (
    <main className="container">
      {tariffs.map((tariffs, i) => (
        <Tariffcard
          price={tariffs.price}
          speed={tariffs.speed}
          theme={themes[i]}
          isSelected={tariffs.isSelected}
        />
      ))}
    </main>
  );
}

export default Main;
