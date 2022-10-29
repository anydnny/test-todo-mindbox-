import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*{ 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#root{
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
}
body, #root, html{
  height: 100%;
}
html {
  font-size: 62.5%;
}
li{
  list-style-type: none;
}
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Global />
    <App />
  </>
);
