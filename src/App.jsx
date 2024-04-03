import * as React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const useStorageState = (initialState) => {
  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem("search")
  );

  React.useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  return [searchTerm, setSearchTerm];
};

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

  const [searchTerm, setSearchTerm] = useStorageState("React");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // const searchedStories = stories.filter(function (story) {
  //   return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  const searchedStories = stories.filter((story) => {
    story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
    </div>
  );
};

const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectId} item={item} />
    ))}
  </ul>
);

const Item = ({ item }) => (
  <li>
    <span>
      <a href={item.url}> {item.title} </a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
);

const Search = (props) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        value={props.search}
        onChange={props.onSearch}
      ></input>
      <hr />
    </div>
  );
};

export default App;
