import React, { useState } from "react";
import "./styles/VideoInfo.scss";
import VideoQuality from "./VideoQuality";

const getStrDuration = (sec) => {
  let h, m;
  if (sec < 60) {
    return `${sec} sec`;
  }

  m = Math.floor(sec / 60);

  if (m < 60) {
    return `${m} min${sec % 60 !== 0 ? ` ${sec % 60} sec` : ""}`;
  }

  h = Math.floor(m / 60);

  return `${h} h${m % 60 !== 0 ? ` ${m % 60} min` : ""}${
    sec % 60 !== 0 ? ` ${sec % 60} sec` : ""
  }`;
};

export default function VideoInfo({ url, setUrl, getVideoInfo, videoInfo }) {
  return (
    <div className="videoInfoSection">
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
      <div className="infoContainer">
        <div className="thumbnailContainer">
          <i className="ri-youtube-line"></i>
          <div
            className="thumbnail"
            style={{ backgroundImage: `url('${videoInfo.thumbnail}')` }}
          ></div>
        </div>
        <div className="videoInfo">
          <div className="videoChannel">{videoInfo.channel.name}</div>
          <div className="videoTitle">{videoInfo.title}</div>
          <div className="videoDuration">
            <i class="ri-time-fill"></i>
            {getStrDuration(videoInfo.duration)}
          </div>
          <div className="availableTitle">
            <span>Available</span> Formats
          </div>
          <div className="videoQualityList">
            {videoInfo.formats.map((format, index) => (
              <VideoQuality
                key={index}
                resolution={format.quality}
                format={format.format}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
