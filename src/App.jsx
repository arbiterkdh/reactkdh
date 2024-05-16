import React from "react";
import axios from "axios";

function App(props) {
  function handleClick1() {
    axios.get("/api/main42/sub1").then((param) => console.log(param.data));
  }

  function handleClick2() {
    axios.get("/api/main42/sub2").then((param) => console.log(param.data));
  }

  function handleClick3() {
    axios.get("/api/main42/sub3").then((res) => console.log(res.data));
  }

  function handleClick5() {
    axios.get("/api/main42/sub5").then((res) => console.log(res.data));
  }

  return (
    <div>
      <button onClick={handleClick1}>응답 받기</button>
      <br />
      <button onClick={handleClick2}>응답2 받기</button>
      <br />
      <button onClick={handleClick3}>JSON 3 받기</button>
      <br />
      {/* /api/main42/sub4 get 요청 후
      응답 받은 내용을 콘솔에 출력 */}

      <br />
      <button onClick={handleClick5}>응답 받기</button>
    </div>
  );
}

export default App;
