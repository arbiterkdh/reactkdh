import React, { useState } from "react";

function MyInput() {
  function handleChange(e) {
    const { ...nextFavorite } = favorite;
  }

  return (
    <div>
      <div>
        <input type="text" name={"name"} onChange={handleChange} />
      </div>
      <div>
        <input type="text" name={"singer"} onChange={handleChange} />
      </div>
    </div>
  );
}

function MyButton() {
  return <button>등록</button>;
}

function MyList() {
  return <ul></ul>;
}

function App(props) {
  const [favorite, setFavorite] = useState({
    name: "",
    singer: "",
  });
  const [list, setList] = useState([]);
  return (
    <div>
      <MyInput favorite={favorite} />
      <MyButton />
      <MyList />
    </div>
  );
}

export default App;
