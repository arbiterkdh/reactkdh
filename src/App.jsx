import React from "react";

function App(props) {
  const foodList = ["pizza", "burger", "noodle", "coffee"];

  return (
    <div>
      {/*
     <ul>
      <li> pizza </li>
      <li> burger </li>
      <li> noodle </li>
      <li> coffee </li>
     </ul>
     */}
      <div>
        {foodList.map((food) => (
          <li>{food}</li>
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default App;
