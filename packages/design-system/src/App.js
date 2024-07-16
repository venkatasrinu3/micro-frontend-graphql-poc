import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SkeletonComponent from "./utils/skeleton/SkeletonComponent";

const App = () => (
  <div className="container">
    <div>Name: design-system</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <SkeletonComponent />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
