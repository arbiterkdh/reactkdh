import React, { useState } from "react";

function App(props) {
  const [text, setText] = useState("");

  const isTooLong = text.length > 10;

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
      {isTooLong && <p>11자 이상 입력할 수 없습니다.</p>}
    </div>
  );
}

export default App;
