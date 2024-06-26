import React from "react";

function App(props) {
  const names = [
    { id: 1, name: "January" },
    { id: 2, name: "February" },
    { id: 3, name: "March" },
    { id: 4, name: "April" },
  ];
  // <li>January</li>
  // <li>February</li>
  // <li>March</li>
  // <li>April</li>
  // 배열을 map 메소드 사용해서 컴포넌트들을 만들 때,
  // key prop 을 사용해서 효율성을 높일 것
  // key prop 의 값은 주로 primary key 가 사용됨
  return (
    <div>
      <ul>
        {names.map((name) => (
          <li key={name.id}>{name.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
