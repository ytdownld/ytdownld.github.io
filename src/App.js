import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Nav from "./components/Nav";
import Search from "./components/Search";
import VideoInfo from "./components/VideoInfo";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function App() {
  const [dark, setDark] = useState(false);
  const [url, setUrl] = useState("");
  const [onSearch, setSearch] = useState(false);
  const [showInitial, setInitial] = useState(true);

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
    setInitial(false);
    setSearch(true);
    await sleep(5000);
    setSearch(false);
  };

  return (
    <div className="App">
      <Nav dark={dark} switchTheme={switchTheme} />
      {onSearch ? (
        <Loading />
      ) : (
        !showInitial && (
          <VideoInfo url={url} setUrl={setUrl} getVideoInfo={getVideoInfo} />
        )
      )}

      {showInitial && (
        <Search url={url} setUrl={setUrl} getVideoInfo={getVideoInfo} />
      )}
    </div>
  );
}

export default App;
