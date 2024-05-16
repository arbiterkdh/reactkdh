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

  function handleClickButton5() {
    const params = new URLSearchParams();

    params.append("id", 3);
    params.append("name", "son");
    params.append("email", "son@son.com");

    axios.get(`/api/some-url3?${params}`);
  }

  function handleClickButton6() {
    const params = new URLSearchParams();
    params.append("id", 5);
    params.append("city", "서울");
    params.append("country", "한국");

    axios.post("/api/some-url3", params);
  }

  function handleClickButton7() {
    const params = new URLSearchParams();
    params.append("id", 5);
    params.append("name", "son");
    params.append("email", "son@son.com");

    axios.get(`/api/some-url4?${params}`);
  }

  function handleClickButton8() {
    const params = new URLSearchParams();
    params.append("id", 7);
    params.append("city", "London");
    params.append("country", "England");

    axios.post("/api/some-url4", params);
  }

  return (
    <div>
      <button onClick={handleClickButton1}>get 요청</button>
      <button onClick={handleClickButton2}>post 요청</button>
      {/* /api/some-url2 */}
      <button onClick={handleClickButton3}>get 요청2</button>
      <button onClick={handleClickButton4}>post 요청2</button>
      {/* data 도 함께 보내기 */}
      <button onClick={handleClickButton5}>get 요청 with query string</button>
      <button onClick={handleClickButton6}>post 요청 with data</button>

      {/* /api/some-url4 get, post with data */}
      <button onClick={handleClickButton7}>get 요청 with data</button>
      <button onClick={handleClickButton8}>post 요청 with data</button>

      {/*  혼자 연습용 */}
      <button onClick={handleClickButtonPractice1}>get practice</button>
      <button onClick={handleClickButtonPractice2}>post practice</button>
    </div>
  );
}

export default App;
