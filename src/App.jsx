function MyTag() {
  return <h3>hello component</h3>;
}
function MyContent() {
  return <p>my content</p>;
}

function App() {
  return (
    <>
      <div>
        <h1>Hello react</h1>
        <MyTag />
        {/* <h3> hello component </h3>*/}
        <MyContent />
        {/*  <p> my content </p>*/}
      </div>
    </>
  );
}

export default App;
