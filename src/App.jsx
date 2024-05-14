import React, { createContext, useContext, useState } from "react";

const TextContext = createContext(null);

function MyInput() {
  const textHandler = useContext(TextContext);
  return (
    <input
      value={textHandler.text}
      type="text"
      onChange={(e) => textHandler.updateText(e.target.value)}
    />
  );
}

function MyText() {
  const textHandler = useContext(TextContext);
  return (
    <div>
      <p>{textHandler.text}</p>
    </div>
  );
}

function MyButton({ onClick }) {
  return <button onClick={onClick}>등록</button>;
}

function MyList({ list }) {
  return (
    <ul>
      {list.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

function App(props) {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function handleUpdateText(t) {
    setText(t);
  }

  function handleUpdateList() {
    list.push(text);
    setText("");
  }

  return (
    <div>
      <TextContext.Provider
        value={{
          text,
          updateText: handleUpdateText,
        }}
      >
        <MyInput />
        <MyButton onClick={handleUpdateList} />
        <MyText />
        <hr />
        <MyList list={list} />
      </TextContext.Provider>
    </div>
  );
}

export default App;
