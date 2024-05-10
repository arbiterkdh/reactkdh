import React from "react";

function MyComp(props) {
  return <div></div>;
}

function App(props) {
  return (
    <div>
      <MyComp
        /*props 의 값 타입은 javascript 값 타입*/
        /*{} 안에 값 입력, (string 만 생략 가능)*/
        name={"son"}
        street="gangnam"
        age={3.14}
        address={{ city: "seoul", country: "US" }}
        foods={["pizza", "coffee"]}
        married={true}
        action={function () {
          console.log("action");
        }}
        someAction={() => console.log("someAction")}
      />
    </div>
  );
}

export default App;
