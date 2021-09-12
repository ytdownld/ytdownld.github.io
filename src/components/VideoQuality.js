import React from "react";
import "./styles/VideoQuality.scss";

export default function VideoQuality({ resolution, format }) {
  return (
    <div className="qualityCard">
      <div className="downldIco">
        <i
          className={format === ".mp3" ? "ri-music-fill" : "ri-movie-line"}
        ></i>
      </div>
      <div className="resolution">{resolution}</div>
      <div className="format">{format}</div>
    </div>
  );
}
