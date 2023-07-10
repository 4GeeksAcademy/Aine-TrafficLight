import React, { useState } from "react";

const Home = () => {
  const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (index) => {
    setClickedButton(index === clickedButton ? null : index);
  };

  return (
    <div className="container">
      <div className="structure">
        <button
          className={`circle Red ${clickedButton === 0 ? "highlighted" : ""}`}
          onClick={() => handleButtonClick(0)}
        ></button>
        <button
          className={`circle Yellow ${
            clickedButton === 1 ? "highlighted" : ""
          }`}
          onClick={() => handleButtonClick(1)}
        ></button>
        <button
          className={`circle Green ${clickedButton === 2 ? "highlighted" : ""}`}
          onClick={() => handleButtonClick(2)}
        ></button>
      </div>
    </div>
  );
};

export default Home;
