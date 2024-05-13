import React, { useState } from "react";

function MyComp() {
  const [val1, setVal1] = useState(0);

  let val2 = 0;

  console.log("다시 호출됨");

  return (
    <div>
      <button onClick={() => setVal1(val1 + 1)}>val1 {val1}</button>
      <button onClick={() => val2++}>val2 {val2}</button>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp />
    </div>
  );
}

export default App;
