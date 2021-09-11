import React from "react";
import "./styles/Search.scss";

export default function Search({ url, setUrl, getVideoInfo }) {
  return (
    <div className="searchSection">
      <i className="ri-youtube-line"></i>
      <div className="search">
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => getVideoInfo(e)}
          type="text"
          placeholder="Video Url"
        ></input>
        <button className="searchIco">
          <i class="ri-search-eye-line"></i>
        </button>
        <button onClick={() => setUrl("")} className="searchClearIco">
          <i class="ri-close-line"></i>
        </button>
      </div>
    </div>
  );
}
