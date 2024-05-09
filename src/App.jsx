function App() {
  // const, let 중에 사용 var 는 쓰지 말기
  const myTag = <h1>hello</h1>;
  const val1 = "흥민";
  const val2 = 3.14;
  const val3 = 456;
  const val4 = true;
  const val5 = null;
  const val6 = undefined;
  const val8 = [2, 3];
  const val9 = { age: 3, name: "강인" };

  // {} : jsx 내에서 javascript 코드 사용
  return (
    <>
      <p>
        {val1} 선수는 연봉이 {val3} 억원이다.
      </p>
      <div>{val1}</div>
      <div>{val2}</div>
      <div>{val3}</div>
      <div>{myTag}</div>
      {/*불리언, null, undefined 은 출력 안됨*/}
      <div>{val4}</div>
      <div>{val5}</div>
      <div>{val6}</div>
      <div>{val8}</div>
      {/*객체는 오류*/}
      {/*프로퍼티를 꺼내서 사용*/}
      <div>{val9.name}</div>
      <div>{val9.age}</div>
    </>
  );
}

export default App;
