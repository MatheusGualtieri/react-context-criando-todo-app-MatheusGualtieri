import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Todos from "./components/Todos";
import NewTodoForm from "./components/NewTodoForm";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Todos />
      <NewTodoForm />
    </div>
  );
}

export default App;
