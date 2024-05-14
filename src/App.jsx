import React, { useState } from "react";

function MyBox() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={(e) => setCount(count + 1)}>up</button>
      <p>{count}</p>
    </div>
  );
}

function App(props) {
  const [view, setView] = useState(true);
  return (
    <div>
      <input
        type="checkbox"
        checked={view}
        onChange={(e) => setView(e.target.checked)}
      />
      {view && <MyBox />}
    </div>
  );
}

export default App;
