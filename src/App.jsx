import React, { createContext, useContext, useState } from "react";

const MessageContext = createContext("");

function MyBox() {
  const message = useContext(MessageContext);
  return <div>{message}</div>;
}

function MySection() {
  return <MyBox />;
}

function MyContainer() {
  return <MySection />;
}

function App(props) {
  const [message, setMessage] = useState("");
  const [list, setList] = useState([]);

  function handleUpdateList() {
    list.push(message);
    setMessage("");
  }

  return (
    <div>
      <input
        value={message}
        type="text"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleUpdateList}>등록</button>
      <p>{message}</p>
      <hr />
      <MessageContext.Provider value={message}>
        <MyContainer />
      </MessageContext.Provider>
      <hr />
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
