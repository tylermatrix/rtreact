import logo from "./logo.svg";
import "./App.css";

//Variable allowing you to interpolate in execution
const title = "react";

//Object that you can pull information from with {welcome.greeting}
const welcome = {
  greeting: "hey",
  title: "react",
};

//Function that you can execution in component
function getTitle(title) {
  return title;
}

//Defining arrray outside, but can also be done inside
const list = [
  {
    title: "React",
    url: "https://reactjs.org",
    author: "Jordan Wilke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const numbers = [1, 2, 3, 4];
//function using map to iterate over array and return new array
const newNumbers = numbers.map(function (number) {
  return number * 2;
});

const App = () => {
  return (
    <div className="App">
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" />
      <hr />

      <List />
    </div>
  );
};

const List = () => {
  return list.map(function (item) {
    return (
      <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title} </a>
        </span>
        <span>{item.author} </span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </div>
    );
  });
};

export default App;
