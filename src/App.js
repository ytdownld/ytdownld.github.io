import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Search from "./components/Search";

function App() {
  const [dark, setDark] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const local_dark = localStorage.getItem("dark");
    if (!local_dark || local_dark === "false") {
      setDark(false);
      document.documentElement.setAttribute("data-theme", "");
    } else {
      setDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const switchTheme = () => {
    if (dark) {
      setDark(false);
      localStorage.setItem("dark", "false");
      document.documentElement.setAttribute("data-theme", "");
    } else {
      setDark(true);
      localStorage.setItem("dark", "true");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  };

  const getVideoInfo = async (e) => {
    if (e.key !== "Enter") return;
    // Need to fetch data here
  };

  return (
    <div className="App">
      <Nav dark={dark} switchTheme={switchTheme} />
      <Search url={url} setUrl={setUrl} getVideoInfo={getVideoInfo} />
    </div>
  );
}

export default App;
