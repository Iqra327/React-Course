//App.js file

import './App.css';
import { useToggle } from './useToggle';

function App() {
  const [isVisible, toggle] = useToggle();
  const [isVisible2, toggle2] = useToggle();

  return (
    <div className="App">
      <button onClick={toggle}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <h1>Hidden Text</h1>}

      <button onClick={toggle2}>
        {isVisible2 ? "Hide" : "Show"}
      </button>
      {isVisible2 && <h1>Hidden Text</h1>}
    </div>
  );
}

export default App;


//useToggle.js file

import { useState } from "react";

export const useToggle = (initialVal = false)  => {
  const [state, setState] = useState(initialVal);

  const toggle = () => {
    setState((prev) => !prev);
  }

  return [state, toggle];
};