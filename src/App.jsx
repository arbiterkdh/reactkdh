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

function MyList() {
  return <ul></ul>;
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
          text: text,
          updateText: handleUpdateText,
        }}
      >
        <MyInput />
        <MyButton onClick={handleUpdateList} />
        <MyText />
        <MyList />
      </TextContext.Provider>
    </div>
  );
}

export default App;
