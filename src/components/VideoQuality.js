import React from "react";
import "./styles/VideoQuality.scss";

export default function VideoQuality({
  resolution,
  format,
  url,
  isVideo,
  download,
  itag,
}) {
  return (
    <div className="qualityCard" onClick={() => download(url, itag)}>
      <div className="downldIco">
        <i className={isVideo ? "ri-movie-line" : "ri-music-fill"}></i>
      </div>
      <div className="resolution">{resolution}</div>
      <div className="format">{format}</div>
    </div>
  );
}
