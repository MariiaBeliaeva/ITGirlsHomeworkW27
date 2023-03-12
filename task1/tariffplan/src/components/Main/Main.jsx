import React, { useState } from "react";
import Tariffcard from "../Tariffcard/Tariffcard";
import theme1 from "../../styles/Theme1.module.css";
import theme2 from "../../styles/Theme2.module.css";
import theme3 from "../../styles/Theme3.module.css";
import theme4 from "../../styles/Theme4.module.css";
import { tariffs } from "./Tariffs.js";

function Main(props) {
  const themes = [theme1, theme2, theme3, theme4];
  const [selected, setSelected] = useState(false);

  const handleChange = () => {
    setSelected(!selected);
  };

  return (
    <main className="container">
      {tariffs.map((tariffs, i) => (
        <Tariffcard
          key={i}
          price={tariffs.price}
          speed={tariffs.speed}
          theme={themes[i]}
          selected={selected === i}
          onClick={handleChange}
        />
      ))}
    </main>
  );
}

export default Main;
