import React, { useState } from "react";

function MyButton({ onClick }) {
  return <button onClick={onClick}>클릭</button>;
}

function MyNumber({ number }) {
  return <div>number : {number}</div>;
}

function App(props) {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <MyButton
        onClick={() => {
          setNumber(number + 1);
        }}
      />
      <MyNumber number={number} />
    </div>
  );
}

export default App;
