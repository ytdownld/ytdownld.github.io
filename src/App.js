import { useState } from "react";
import Nav from "./components/Nav";
import Search from "./components/Search";

function App() {
  const [url, setUrl] = useState("");

  const getVideoInfo = async (e) => {
    if (e.key !== "Enter") return;
    // Need to fetch data here
  };

  return (
    <div className="App">
      <Nav />
      <Search url={url} setUrl={setUrl} getVideoInfo={getVideoInfo} />
    </div>
  );
}

export default App;
