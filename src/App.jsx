import React, { useState } from "react";

function App(props) {
  const [name, setName] = useState("");
  const [singer, setSinger] = useState("");
  const [list, setList] = useState([]);

  function handleContent() {
    const [...newList] = list;
    newList.push(name, singer);
    setList(newList);
    setName("");
    setSinger("");
  }

  return (
    <div>
      <div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder={"Name"}
        />
      </div>
      <div>
        <input
          value={singer}
          onChange={(e) => setSinger(e.target.value)}
          type="text"
          placeholder={"Singer"}
        />
      </div>
      <div>
        {name} 이 가장 좋아하는 가수는 {singer} 입니다.
      </div>
      <div>
        <button onClick={handleContent}>등록</button>
      </div>
      <div>
        <ul>
          {list.map((item) => (
            <li>
              {item.name} 이 가장 좋아하는 가수는 {item.singer} 입니다.
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
