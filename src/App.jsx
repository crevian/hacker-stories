import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const list = [
  {
    title: "React",
    url: "https://reactjs.org",
    author: "Jordan",
    num_comments: 3,
    points: 4,
    objectId: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectId: 1,
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>My Hacker Stories</h1>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text"></input>

        <ul>
          {list.map(function (item) {
            return (
              <li key={item.objectId}>
                <span>
                  <a href="{item.url}">{item.title}</a>
                </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
