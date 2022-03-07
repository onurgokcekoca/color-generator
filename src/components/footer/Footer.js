import React from "react";
import "./footer.css";
function Footer({ setColor }) {
  let number = 0;
  const randomNumber = () => {
    number = Math.floor(Math.random() * 255);
    setColor(number);
  };
  return (
    <div>
      <button onClick={randomNumber}>Change</button>
    </div>
  );
}

export default Footer;
