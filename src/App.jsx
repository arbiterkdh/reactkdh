import React from "react";
import axios from "axios";

function App(props) {
  function handleClick1() {
    axios.get("/path1");
  }

  function handleClick2() {
    const qs = new URLSearchParams();
    qs.append("city", "파리");
    qs.append("address", "생제르망");
    axios.get("/path2?" + qs.toString());
  }

  function handleClick3() {
    const qs = new URLSearchParams();
    qs.append("name", "흥민");
    qs.append("age", "33");
    axios.get("/path3?" + qs.toString());
  }

  return (
    <div>
      <div>
        <button onClick={handleClick1}>/path1 get 요청</button>
      </div>
      <div>
        <button onClick={handleClick2}>
          /path2 get 요청, city, address 요청 파라미터가 첨부
        </button>
      </div>
      <div>
        <button onClick={handleClick3}>
          /path3 get 요청, name, age 요청 파라미터가 첨부
        </button>
      </div>
    </div>
  );
}

export default App;
