import React, { useState } from "react";
import "./styles/VideoInfo.scss";
import VideoQuality from "./VideoQuality";

export default function VideoInfo({ url, setUrl, getVideoInfo }) {
  const [qualities, setQualities] = useState([
    {
      resolution: "320kbps",
      format: ".mp3",
    },
    {
      resolution: "720P",
      format: ".mp4",
    },
  ]);

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
          <div className="thumbnail"></div>
        </div>
        <div className="videoInfo">
          <div className="videoChannel">Linus Tech Tips</div>
          <div className="videoTitle">
            My Unlimited Budget WiFi at the New House dasdasdasasdasd sdasdasdas
          </div>
          <div className="videoDuration">
            <i class="ri-time-fill"></i>17:35 min
          </div>
          <div className="availableTitle">
            <span>Available</span> Formats
          </div>
          <div className="videoQualityList">
            {qualities.map((quality, index) => (
              <VideoQuality
                key={index}
                resolution={quality.resolution}
                format={quality.format}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
