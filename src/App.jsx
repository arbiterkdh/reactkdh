import React from "react";

function App(props) {
  // a 클릭 시
  // form 서브밋 시

  function handleLinkClick(e) {
    e.preventDefault();
    console.log("a태그 클릭시 작동하는 코드");
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    console.log("submit 시 작동하는 코드");
  }

  // 기본 동작 막고, 콘솔에 간단한 메시지 출력
  return (
    <div>
      <a href="https://www.google.com" onClick={handleLinkClick}>
        구글
      </a>
      <hr />
      <form action="https://www.google.com" onSubmit={handleSubmitForm}>
        <input type="text" />
        <button>전송</button>
      </form>
    </div>
  );
}

export default App;
