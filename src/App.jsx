import React, { useState } from "react";

function MyCounter() {
  const [val, setVal] = useState(0);

  return (
    <div>
      {val}
      <button onClick={() => setVal(val + 1)}>증가</button>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyCounter />
    </div>
  );
}

export default App;
