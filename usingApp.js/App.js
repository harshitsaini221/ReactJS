const heading = React.createElement(
  "h1", //tag
  { id: "heading" }, //attributes
  "Hello World From React!" //children
);

//object is where we give attributes to our tags

console.log(heading);
//react element (JS object), has props

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
