import logo from "./logo.svg";
import "./App.css";

const title = "react";

function App() {
  return (
    <div className="App">
      <h1>Hello {title}</h1>

      <label htmlFor="serach">Search: </label>
      <input type="text" id="search" />
    </div>
  );
}

export default App;
