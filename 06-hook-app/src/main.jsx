import React from "react";
import ReactDOM from "react-dom/client";
import { MultipleCustomHooks } from "./03-examples";
import { FocusScreen } from "./04-UseRef/FocusScreen";
import { Layout } from "./05-useLayoutEffect/Layout";
import { CallbackHook } from "./06-memos/CallbackHooks";
import { MemoHook } from "./06-memos/MemoHook";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";

// import { CounterApp } from "./01-UseState/CounterApp";
// import { CounterWithCustomHooks } from "./01-UseState/CounterWithCustomHooks";
// import { HooksApp } from "./HooksApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <CallbackHook />
  //</React.StrictMode>
);
