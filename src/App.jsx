import React from "react";

function MyComp({ headStyle, bodyStyle }) {
  return (
    <div>
      <h1 style={headStyle}>Lorem.</h1>
      <p style={bodyStyle}>Lorem ipsum dolor.</p>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp
        headStyle={{
          padding: "10px",
          border: "1px solid black",
          color: "red",
        }}
        bodyStyle={{
          margin: "10px",
          border: "1px dotted brown",
          color: "teal",
          textAlign: "center",
        }}
      />
    </div>
  );
}

export default App;
