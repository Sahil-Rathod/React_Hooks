import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [res, setRes] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${res}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [res]);
  return (
    <>
      <div>
        <button onClick={() => setRes("posts")}>Posts</button>
        <button onClick={() => setRes("users")}>Users</button>
        <button onClick={() => setRes("comments")}>Comments</button>
      </div>
      <h1>{res}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}

export default App;
