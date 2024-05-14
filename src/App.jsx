import React, { useState } from "react";

// context
// https://react.dev/learn/passing-data-deeply-with-context
// # context 과용하지 말 것
// 1. props 전달부터 시작할 것
// 2. 주로 theme, 현재 계정정보, routing 등에 사용됨

function MyBox({ message }) {
  return <div>{message}</div>;
}

function MySection({ message }) {
  return <MyBox message={message} />;
}

function MyContainer({ message }) {
  return <MySection message={message} />;
}

function App(props) {
  const [message, setMessage] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setMessage(e.target.value)} />
      <p>{message}</p>
      <hr />
      <MyContainer message={message} />
    </div>
  );
}

export default App;
