function MyComponent() {
  // 최상위 컴포넌트 사용하지 않고 싶을 때 -> fragment <></> 사용
  return (
    <>
      <p>Lorem ipsum dolor.</p>
      <p>Eos, esse nesciunt?</p>
    </>
  );
}

function MyComp() {
  // 최상위 컴포넌트는 1개임
  return (
    <div>
      <p>Lorem ipsum.</p>
      <p>Maiores, provident.</p>
    </div>
  );
}

function MyTag() {
  // jsx 코드가 여러줄일때 () 사용
  return (
    <div>
      hello tag
      <p>Lorem ipsum.</p>
      <p>Autem, itaque?</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyTag />
      <MyComp />
      <MyComponent />
    </div>
  );
}

export default App;
