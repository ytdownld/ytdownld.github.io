import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Nav from "./components/Nav";
import Preferences from "./components/Preferences";
import Search from "./components/Search";
import VideoInfo from "./components/VideoInfo";

import {
  autoDownloadExists,
  click_link,
  get_download_url,
  normalizeVideoInfo,
  sleep,
} from "./utils/utils";
import {
  formats as formatTypes,
  API,
  YTregex,
  formats,
} from "./utils/constants";

function App() {
  const [dark, setDark] = useState(false);
  const [url, setUrl] = useState("");
  const [onSearch, setSearch] = useState(false);
  const [showInitial, setInitial] = useState(true);
  const [statusMsg, setStatusMsg] = useState("");
  const [showStatus, setStatus] = useState(false);
  const [error, setError] = useState(false);

  const [showPref, setPref] = useState(false);
  const [autoDownload, setAutoDownload] = useState(false);
  const [nativeMode, setNativeMode] = useState(false);
  const [formatType, setFormatType] = useState({});

  const [videoInfo, setVideoInfo] = useState({});

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
    const pInitial = showInitial;
    setInitial(false);
    setSearch(true);
    setStatus(false);

    try {
      if (!YTregex.test(url)) {
        throw new Error("Invalid youtube link");
      }

      const res = await axios.get(`${API}/videoInfo`, {
        params: {
          videoURL: url,
        },
      });

      if (res.status !== 200) {
        throw new Error(res.data.message);
      }

      const info = normalizeVideoInfo(res.data);
      const is_autodownload = await autoDownloadExists(
        info,
        {
          autoDownload,
          formatType,
        },
        printStatus
      );

      setInitial(false);
      setVideoInfo(info);
      setSearch(false);

      if (is_autodownload) {
        await start_autodownload();
      }
    } catch (err) {
      setError(true);
      setStatusMsg(err.message);
      setStatus(true);
      setInitial(pInitial ? true : false);
      setSearch(false);
    }
  };

  const start_autodownload = async () => {
    setStatus(true);
    setError(false);

    setStatusMsg(`Auto start downloading in 3 sec`);
    await sleep(1000);

    setStatusMsg(`Auto start downloading in 2 sec`);
    await sleep(1000);

    setStatusMsg(`Auto start downloading in 1 sec`);
    await sleep(1000);

    setStatusMsg(`Auto start downloading in 0 sec`);
    await sleep(1000);

    setStatusMsg(`Started`);
    await sleep(1000);

    if (nativeMode) {
      const nUrl = videoInfo.formats.find(
        (format) => format.itag === formatType.itag
      ).url;
      click_link(nUrl);
    } else {
      const dFormat = formats.find((format) => format.itag === formatType.itag);
      click_link(
        get_download_url({
          videoURL: url,
          format: dFormat.format,
          itag: dFormat.itag,
        })
      );
    }

    setStatus(false);
  };

  const download = (nUrl, vInfo = {}) => {
    if (nativeMode) {
      click_link(nUrl);
    } else {
      click_link(
        get_download_url({
          videoURL: url,
          format: vInfo.format,
          itag: vInfo.itag,
        })
      );
    }
  };

  const printStatus = (msg, error = false) => {
    setStatus(true);
    if (error) {
      setError(true);
    }

    setStatusMsg(msg);
  };

  const resetData = () => {
    setUrl("");
    setInitial(true);
    setStatusMsg("");
    setStatus(false);
    setError(false);
    setFormatType({});
    setVideoInfo({});
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
      <Nav
        dark={dark}
        switchTheme={switchTheme}
        setPref={setPref}
        showMain={resetData}
        isSearching={onSearch}
      />
      {onSearch ? (
        <Loading />
      ) : (
        !showInitial && (
          <VideoInfo
            url={url}
            setUrl={setUrl}
            getVideoInfo={getVideoInfo}
            videoInfo={videoInfo}
            download={download}
            status={{
              showStatus,
              setStatus,
              statusMsg,
              setStatusMsg,
              error,
              setError,
            }}
          />
        )
      )}

      {showInitial && (
        <Search
          url={url}
          setUrl={setUrl}
          getVideoInfo={getVideoInfo}
          status={{
            showStatus,
            setStatus,
            statusMsg,
            setStatusMsg,
            error,
            setError,
          }}
        />
      )}
    </div>
  );
}

export default App;
