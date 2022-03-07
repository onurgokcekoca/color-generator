import { useState } from "react";
import "./App.css";
import Colors from "./components/color/colors";
import Footer from "./components/footer/Footer";

function App() {
  const [color, setColor] = useState(200);

  const zero = 0;
  let percentages = [];

  for (let i = 0; i <= 96; i += 4) {
    percentages.push(zero + i);
  }

  return (
    <div className="App">
      {percentages.map((item) => (
        <Colors key={item} item={item} color={color} />
      ))}
      <div className="footer">
        <Footer setColor={setColor} />
      </div>
    </div>
  );
}

export default App;
