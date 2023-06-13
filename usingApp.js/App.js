const heading = React.createElement("h1", {id: "heading"}, "Hello World From React!");

//object is where we give attributes to our tags

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
