import React, { useState } from "react";

function MyBox() {
  const [val, setVal] = useState("");

  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setVal(e.target.value)} />
        <p>{val}</p>
      </div>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyBox />
      <hr />
      <MyBox />
    </div>
  );
}

export default App;
