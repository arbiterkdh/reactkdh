import React from "react";

function App(props) {
  const son = {
    lastName: "손",
    firstName: "흥민",
    address: "런던",
    country: "영국",
    married: false,
  };

  return (
    <div>
      <ul>
        <li>성 : {son.lastName}</li>
        <li>이름 : {son.firstName}</li>
        <li>주소 : {son.address}</li>
        <li>국가 : {son.country}</li>
        <li>결혼여부 : {son.married ? "기혼" : "미혼"}</li>
      </ul>
    </div>
  );
}

export default App;
