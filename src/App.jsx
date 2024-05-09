import React from "react";

function App(props) {
  // 배열
  const a = [];

  // push : 새 값을 배열 맨 뒤에 추가
  a.push("흥민");
  a.push("강인");
  a.push(3.14);
  console.log(a);
  // pop : 맨 뒤의 값을 제거 후 리턴
  let val1 = a.pop();
  console.log(val1);
  let val2 = a.pop();
  console.log(val2);
  console.log(a);

  // map : 각 원소를 다른 값으로 매핑(mapping) 후 새 배열 리턴
  const b = [5, 4, 3, 2, 1];
  console.log(b);

  const c = b.map((param) => param * 3);
  console.log(b);
  console.log(c);

  return <div></div>;
}

export default App;
