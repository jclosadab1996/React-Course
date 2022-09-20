import React from "react";
import ReactDom from "react-dom/client";
import { CounterApp } from "./CounterApp";

// import { HelloWorldApp } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";

import "./styles.css";

// function App() {
//   // document.createElement...
//   return <h1>Hola mundo!!</h1>;
// }

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={0} />
  </React.StrictMode>
);
