import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState();

  useEffect(() => {
    axios.get("/api/hello").then((res) => {
      setMessage(res.data.message);
    });
  });

  return (
    <>
      <h1>{message || "Loading..."}</h1>
    </>
  );
}

export default App;
