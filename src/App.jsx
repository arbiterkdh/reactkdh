import React, { useState } from "react";

function App(props) {
  const [favorite, setFavorite] = useState({
    name: "",
    singer: "",
  });
  const [list, setList] = useState([]);

  function handleChange(e) {
    const { ...nextFavorite } = favorite;
    nextFavorite[e.target.name] = e.target.value;
    setFavorite(nextFavorite);
  }

  function handleClick() {
    const [...nextList] = list;
    nextList.push(favorite);
    setList(nextList);
    setFavorite({
      name: "",
      singer: "",
    });
  }

  return (
    <div>
      <div>
        <input
          value={favorite.name}
          name={"name"}
          type="text"
          placeholder={"이름"}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          value={favorite.singer}
          name={"singer"}
          type="text"
          placeholder={"가수"}
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleClick}>등록</button>
      </div>
      {favorite.name !== "" && favorite.singer !== "" && (
        <div>
          {favorite.name} 의 최애 가수는 {favorite.singer} 입니다.
        </div>
      )}
      <ul>
        {list.map((e) => (
          <li>
            {e.name} 의 최애 가수는 {e.singer} 입니다.
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
