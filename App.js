import React from "react";
import ReactDOM from "react-dom/client";
import {FeedRocketIcon} from "react-icons"

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

const element = <h1>This is a React Element</h1>;
const number = 22011999;

//React Functional Component
//we cannot have 2 root containers in jSX,
//either we shall wrap it in a <div> tag
//or use React.Fragment Tag, which basically behaves as an empty tag

const HeadingComponent = () => {
  return (
    <React.Fragment>
    <div id="container">
      <Title />
      {element}
      <h2>{number}</h2>
      <h1 className="heading">React Functional Component</h1>
    </div>
    <div id="container2">

    </div>
    </React.Fragment>
  );
};

// similar to const HeadingComponent = () => <h1 className="heading">React Functional Component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
