import React from "react";

function MyButton({ name = "클릭" }) {
  return (
    <div>
      <button>{name}</button>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyButton name="버튼1" />
      {/* 버튼1 */}
      <MyButton />
      {/* 클릭 */}
    </div>
  );
}

export default App;
