import React from "react";

function MyComp({ headColor, bodyColor }) {
  return (
    <div>
      <h1 style={{ color: headColor }}>Lorem.</h1>
      <p style={{ color: bodyColor }}>Lorem ipsum dolor.</p>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp headColor={"firebrick"} bodyColor={"magenta"} />
      <MyComp headColor={"green"} bodyColor={"lime"} />
    </div>
  );
}

export default App;
