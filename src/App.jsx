import React, { useState } from "react";

function MyBox({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>up</button>
      <p>{count}</p>
    </div>
  );
}

function App(props) {
  const [view, setView] = useState(true);
  const [count, setCount] = useState(0);
  return (
    <div>
      <input
        type="checkbox"
        checked={view}
        onChange={(e) => setView(e.target.checked)}
      />
      {view && <MyBox count={count} setCount={setCount} />}
    </div>
  );
}

export default App;
