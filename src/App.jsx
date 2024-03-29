import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const App = () => {
  const stories = [
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

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search />
      <hr />
      <List list={stories} />
    </div>
  );
};

const List = (props) => {
  return (
    <ul>
      {props.list.map(function (item) {
        return <Item key={item.objectId} item={item} />;
      })}
    </ul>
  );
};

const Item = (props) => {
  return (
    <li>
      <span>
        <a href={props.item.url}> {props.item.title} </a>
      </span>
      <span>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span>
    </li>
  );
};

const Search = () => {
  const handleChange = (event) => {
    // event description
    console.log(event);
    // value of target
    console.log(event.target.value);
  };

  const handleBlur = (event) => {
    //event description
    console.log(event);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
      ></input>
    </div>
  );
};

export default App;
