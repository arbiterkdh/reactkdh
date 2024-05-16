import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  function handleClick() {
    const obj1 = { name: "son", age: 44 };
    // const json1 = JSON.stringify(obj1);

    // axios 가 두번째 파라미터가 객체면 직렬화 해줌.
    axios.post("/api/main41/sub1", obj1);
  }

  function handleClick2() {
    const obj1 = {
      name: "yerin",
      beauty: "amazing",
      song: "square(2017)",
    };
    axios.post("/api/main41/sub2", obj1);
  }

  function handleClick3() {
    axios.post("/api/main41/sub3", { name, city });
  }

  return (
    <div>
      <button onClick={handleClick}>요청(json 데이터 포함)</button>
      {/*  같은 상황 연습 /api/main41/sub2 post */}
      <button onClick={handleClick2}>요청 (json 데이터 포함)</button>

      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        <input type="text" onChange={(e) => setCity(e.target.value)} />
        <br />
        <button onClick={handleClick3}>요청 (input 에 입력한 값)</button>
      </div>
    </div>
  );
}

export default App;
