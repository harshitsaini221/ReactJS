import React from "react";
import ReactDOM from "react-dom/client";

//React Element

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Harshit Saini ReactJS"
// );

//JSX -> HTML-like or XML-like
const jsxHeading = <h1 id="heading">JSX Heading!</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
