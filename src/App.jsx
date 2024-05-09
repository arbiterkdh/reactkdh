function App() {
  const a = 7;
  const b = 3;

  // && : 양변이 모두 true 일 때만 결과가 true
  const c = a > 10 && b > 0; // false
  const d = a < 10 && b > 0; // true

  console.log("c", c);
  console.log("d", d);

  // || : 양변이 모두 false 일 때만 결과가 false
  const e = a > 10 || b > 0; // true
  const f = a > 10 || b < 0; // false
  console.log("e", e);
  console.log("f", f);

  // && (and) : 왼쪽 항이 true 면(and : 그렇다면), 오른쪽 값
  const g = a < 10 && "hello"; // hello
  const h = a < 5 && "hi"; // false
  console.log("g", g);
  console.log("h", h);

  // || (or ..아니면) : 왼쪽 항이 false 면 오른쪽 값
  const i = a < 10 || "greeting"; // true
  const j = a < 5 || "안녕"; // 안녕

  console.log("i", i);
  console.log("j", j);
  return <></>;
}

export default App;
