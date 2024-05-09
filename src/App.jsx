import React from "react";

function App(props) {
  const obj = {
    age: 30,
    name: "John Doe",
    email: "john@example.com",
    password: "1234567890",
  };

  return (
    <div>
      <p>
        {obj.name} is {obj.age} years old.
      </p>
      <p>
        And his email address is {obj.email}, password is {obj.password}.
      </p>
    </div>
  );
}

export default App;
