import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Nav from "./components/Nav";
import Preferences from "./components/Preferences";
import Search from "./components/Search";
import VideoInfo from "./components/VideoInfo";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const formatTypes = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function App() {
  const [dark, setDark] = useState(false);
  const [url, setUrl] = useState("");
  const [onSearch, setSearch] = useState(false);
  const [showInitial, setInitial] = useState(true);

  const [showPref, setPref] = useState(true);
  const [autoDownload, setAutoDownload] = useState(false);
  const [nativeMode, setNativeMode] = useState(false);
  const [formatType, setFormatType] = useState({});

  useEffect(() => {
    const local_dark = localStorage.getItem("dark");
    if (!local_dark || local_dark === "false") {
      setDark(false);
      document.documentElement.setAttribute("data-theme", "");
    } else {
      setDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }

    const localAutoDownload = localStorage.getItem("autoDownload");
    setAutoDownload(localAutoDownload === "true" ? true : false);

    const localFormatType = JSON.parse(localStorage.getItem("formatType"));
    if (!localFormatType) {
      localStorage.setItem("formatType", JSON.stringify(formatTypes[0]));
      setFormatType(formatTypes[0]);
    } else {
      setFormatType(localFormatType);
    }

    const localNativeMode = localStorage.getItem("nativeMode");
    setNativeMode(localNativeMode === "true" ? true : false);
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

  const changeFormat = (e) => {
    localStorage.setItem("formatType", JSON.stringify(e));
    setFormatType(e);
  };

  const toggleAutoDownload = () => {
    if (autoDownload) {
      setAutoDownload(false);
      localStorage.setItem("autoDownload", "false");
    } else {
      setAutoDownload(true);
      localStorage.setItem("autoDownload", "true");
    }
  };

  const toggleNativeMode = () => {
    if (nativeMode) {
      setNativeMode(false);
      localStorage.setItem("nativeMode", "false");
    } else {
      setNativeMode(true);
      localStorage.setItem("nativeMode", "true");
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
      {showPref && (
        <Preferences
          setPref={setPref}
          autoDownload={autoDownload}
          onAutoDownloadChange={toggleAutoDownload}
          formatType={formatType}
          formatTypes={formatTypes}
          onFormatChange={changeFormat}
          nativeMode={nativeMode}
          onNativeModeChange={toggleNativeMode}
        />
      )}
      <Nav dark={dark} switchTheme={switchTheme} setPref={setPref} />
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
