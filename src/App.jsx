import React from "react";
import axios from "axios";

function App(props) {
  function handleClickButton1() {
    // ajax get 요청
    axios.get("/api/someurl");
  }

  function handleClickButton2() {
    // ajax post 요청
    axios.post("/api/someurl");
  }

  function handleClickButton3() {
    axios.get("/api/some-url2");
  }

  function handleClickButton4() {
    axios.post("/api/some-url2");
  }

  function handleClickButtonPractice1() {
    axios.get("http://localhost:8080");
  }

  function handleClickButtonPractice2() {
    axios.post("http://localhost:8080/api/some-url2");
  }

  return (
    <div>
      <button onClick={handleClickButton1}>get 요청</button>
      <button onClick={handleClickButton2}>post 요청</button>
      {/* /api/some-url2 */}
      <button onClick={handleClickButton3}>get 요청2</button>
      <button onClick={handleClickButton4}>post 요청2</button>

      {/*  혼자 연습용 */}
      <button onClick={handleClickButtonPractice1}>get practice</button>
      <button onClick={handleClickButtonPractice2}>post practice</button>
    </div>
  );
}

export default App;
