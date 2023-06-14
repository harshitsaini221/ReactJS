import React from "react";
import ReactDOM from "react-dom/client";

//React Element

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Harshit Saini ReactJS"
// );

//JSX -> HTML-like or XML-like
const Title = () => (
  <h1 id="heading" tabIndex="5">
    JSX Heading!
  </h1>
);

//React Functional Component
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1 className="heading">React Functional Component</h1>
    </div>
  );
};

// similar to const HeadingComponent = () => <h1 className="heading">React Functional Component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
