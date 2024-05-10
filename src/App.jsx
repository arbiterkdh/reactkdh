import React from "react";

function App(props) {
  function a() {
    console.log("이름있는 함수");
  }
  const b = function () {
    console.log("이름없는 함수 변수에 담기");
  };
  const c = () => {
    console.log("arrow function 변수에 담아서 넣기");
  };
  return (
    <div>
      <button onClick={a}>click1 onClick property 에 이름있는 함수 넣기</button>{" "}
      <br />
      <button onClick={b}>
        click2 onClick property 에 이름없는 함수 변수에 담아서 넣기
      </button>{" "}
      <br />
      <button
        onClick={function () {
          console.log("이름없는 함수 바로 담기");
        }}
      >
        click3 onClick property 에 이름없는 함수 바로 넣기
      </button>{" "}
      <br />
      <button onClick={c}>
        click4 onClick property 에 arrow function 변수에 담아서 넣기
      </button>{" "}
      <br />
      <button
        onClick={() => {
          console.log("arrow function 바로 넣기");
        }}
      >
        click5 onClick property 에 arrow function 바로 넣기
      </button>{" "}
      <br />
    </div>
  );
}

export default App;
