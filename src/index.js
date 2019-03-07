import React from "react";
import ReactDOM from "react-dom";
import { Slideshow } from "./Components/Slideshow";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Slideshow />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
