import React from "react";
import ReactDOM from "react-dom/client";
import { MultipleCustomHooks } from "./03-examples";
import { FocusScreen } from "./04-UseRef/FocusScreen";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";

// import { CounterApp } from "./01-UseState/CounterApp";
// import { CounterWithCustomHooks } from "./01-UseState/CounterWithCustomHooks";
// import { HooksApp } from "./HooksApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FocusScreen />
  </React.StrictMode>
);
