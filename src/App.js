import logo from "./logo.svg";
import "./App.css";

const title = "react";

const welcome = {
  greeting: "hey",
  title: "react",
};

function getTitle(title) {
  return title;
}

function App() {
  return (
    <div className="App">
      <h1>Hello {getTitle("react")}</h1>

      <label htmlFor="serach">Search: </label>
      <input type="text" id="search" />
    </div>
  );
}

export default App;
