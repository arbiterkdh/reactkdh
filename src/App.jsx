import React from "react";

function MyComp({ name, age, someProp, otherProp }) {
  console.log("name", name);
  console.log("age", age);
  console.log("someProp", someProp); // true
  console.log("otherProp", otherProp);
  return <div></div>;
}

function App(props) {
  return (
    <div>
      <MyComp name={"son"} age={30} someProp />
    </div>
  );
}

export default App;
