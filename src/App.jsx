import React, { useState } from "react";

function MyComp() {
  let val = 0;
  function increment() {
    val++;
  }
  return (
    <div>
      {val}
      <button onClick={increment}>증가</button>
    </div>
  );
}

function MyComp2() {
  const [val, setVal] = useState(0);
  function increment() {
    setVal(val + 1);
  }
  return (
    <div>
      {val}
      <button onClick={increment}>증가</button>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp />
      <MyComp2 />
    </div>
  );
}

export default App;
