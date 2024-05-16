import React from "react";
import axios from "axios";

function App(props) {
  function handleClick200() {
    axios.get("api/main43/sub1").then(() => {
      console.log("200 응답");
    });
  }

  function handleClick400() {
    axios
      .get("api/main43/sub2")
      .then(() => {
        console.log("400 응답");
      })
      .catch(() => console.log("catch 의 메소드, 400 응답시"));
  }

  function handleClick404() {
    axios.get("/api/main43/sub5").catch(() => console.log("404 캐치"));
  }

  function handleClick500() {
    axios.get("/api/main43/sub6").catch(() => console.log("500 캐치"));
  }

  return (
    <div>
      <button onClick={handleClick200}>200 응답</button>
      <button onClick={handleClick400}>400 응답</button>
      <button onClick={handleClick404}>404 응답</button>
      <button onClick={handleClick500}>500 응답</button>
    </div>
  );
}

export default App;
