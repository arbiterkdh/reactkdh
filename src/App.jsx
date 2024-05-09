// built-in component : html 의 기본 요소, 소문자로 시작
// component : 직접만든 요소(태그), 대문자로 시작

// component 는 return 을 가진 함수
function MyComponent() {
  // return : 화면에 출력할 코드
  return <div>hello component</div>;
}

function MyComp() {
  // JSX 코드 : <div></div>

  const myElem = <h1>h1 JSX</h1>;
  return myElem;
}

function App() {
  // component 사용시 종료 태그 생략할 수 없음
  return (
    <>
      <div>
        {/* jsp 내에서의 주석 */}
        {/* 단축키 " ctrl + / */}

        {/*주석*/}
        <h1>
          hello <br /> react
        </h1>
        <h1>Hello react</h1>
        <h2>하이 리액트</h2>
        <h3>안녕 디지몬</h3>
        <p>lorem</p>
        <MyComponent />
        <MyComp />
      </div>
    </>
  );
}

export default App;
