import React from "react";
import "./styles/VideoQuality.scss";

export default function VideoQuality({
  quality,
  format,
  url,
  isVideo,
  download,
  itag,
}) {
  return (
    <div
      className="qualityCard"
      onClick={() => download(url, { itag, format })}
    >
      <div className="downldIco">
        <i className={isVideo ? "ri-movie-line" : "ri-music-fill"}></i>
      </div>
      <div className="resolution">{quality}</div>
      <div className="format">{format}</div>
    </div>
  );
}
