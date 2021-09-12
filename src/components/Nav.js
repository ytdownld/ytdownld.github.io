import React from "react";
import "./styles/Nav.scss";

export default function Nav({ dark, switchTheme, setPref }) {
  return (
    <div className="nav">
      <div className="site_title">
        <span>Yt</span> downld
      </div>
      <div className="site_pref">
        <div
          onClick={switchTheme}
          className={`site_theme ${dark ? "dark" : ""}`}
        ></div>
        <div className="pref" onClick={() => setPref(true)}>
          <i class="ri-settings-6-fill"></i>
        </div>
      </div>
    </div>
  );
}
