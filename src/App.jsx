import React from "react";

function MyButton({ name, sx }) {
  return <button style={sx}>{name}</button>;
}

function App(props) {
  return (
    <div>
      {/*  두 개의 MyButton 컴포넌트를 사용 sx, name */}
      <MyButton
        name={"네이버"}
        sx={{
          backgroundColor: "#03C75A",
          color: "white",
          borderColor: "#03C75A",
        }}
      />
      <MyButton
        name={"구글"}
        sx={{
          color: "#4285f4",
          backgroundColor: "#fbbc04",
          borderColor: "#ea4335",
        }}
      />
    </div>
  );
}

export default App;
