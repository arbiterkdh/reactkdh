import React, { useState } from "react";

function App(props) {
  const [car, setCar] = useState({
    name: "",
    model: "",
    company: "",
    price: "",
  });

  function handleChange(e) {
    const { ...nextCar } = car;
    nextCar[e.target.name] = e.target.value;
    setCar(nextCar);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          name={"name"}
          onChange={handleChange}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          type="text"
          name={"model"}
          onChange={handleChange}
          placeholder={"모델"}
        />
      </div>
      <div>
        <input
          type="text"
          name={"company"}
          onChange={handleChange}
          placeholder={"회사"}
        />
      </div>
      <div>
        <input
          type="text"
          name={"price"}
          onChange={handleChange}
          placeholder={"가격"}
        />
      </div>

      <ul>
        <li>이름: {car.name}</li>
        <li>모델: {car.model}</li>
        <li>회사: {car.company}</li>
        <li>가격: {car.price}</li>
      </ul>
    </div>
  );
}

export default App;
