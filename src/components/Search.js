import React from "react";
import "./styles/Search.scss";
import Status from "./subcomponents/Status";

export default function Search({ url, setUrl, getVideoInfo, status }) {
  return (
    <div className="searchSection">
      <i className="ri-youtube-line"></i>
      <div style={{ position: "relative" }}>
        <div className="search">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => getVideoInfo(e)}
            onPaste={(e) => getVideoInfo(e)}
            type="text"
            placeholder="Video Url"
          ></input>
          <button className="searchIco">
            <i className="ri-search-eye-line"></i>
          </button>
          <button onClick={() => setUrl("")} className="searchClearIco">
            <i className="ri-close-line"></i>
          </button>
        </div>
        <Status status={status} />
      </div>
    </div>
  );
}
