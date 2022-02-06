import React from "react";
import ReactDOM from "react-dom";
const num = 7;
const name = "İzzet";

ReactDOM.render(
  <div>
    <h1>Hello {name} !</h1>
    <p> my lucky number is : {Math.floor(Math.random() * 10)} </p>
  </div>,
  document.getElementById("root")
);
