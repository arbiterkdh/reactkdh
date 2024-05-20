import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [name, setName] = useState("");
  const [file, setFile] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();

    console.log("axios 로 파일 전송");
    axios.postForm("/api/main45/sub2", {
      name: name,
      file: file,
    });
  }

  const fileNames = [];
  for (let i = 0; i < file.length; i++) {
    fileNames.push(<li>{file.item(i).name}</li>);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        이름
        <input
          type="text"
          name={"name"}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          multiple
          type="file"
          name={"file"}
          onChange={(e) => setFile(e.target.files)}
        />
        <br />
        <input type="submit" />
      </form>
      <div>
        <ul>{fileNames}</ul>
      </div>
    </div>
  );
}

export default App;
