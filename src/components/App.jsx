import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "../../public/vite.svg";
import "../styles/App.css";
import CVLayout from "./CVLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>CV Maker</h1>
      <CVLayout />
    </div>
  );
}

export default App;
