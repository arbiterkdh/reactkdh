import React, { useState } from "react";

function App(props) {
  const [name, setName] = useState("");
  const [hobby, setHobby] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  return (
    <div>
      <div>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder={"Name"}
        />
      </div>
      <div>
        <input
          onChange={(e) => setHobby(e.target.value)}
          type="text"
          placeholder={"Hobby"}
        />
      </div>
      <div>
        <input
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          placeholder={"address"}
        />
      </div>
      <div>
        <input
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder={"city"}
        />
      </div>
      <div>
        {name}, {hobby}, {address}, {city}
      </div>
    </div>
  );
}

export default App;
