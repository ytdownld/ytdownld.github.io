import React from "react";
import "./styles/Nav.scss";

export default function Nav({
  dark,
  switchTheme,
  setPref,
  showMain,
  isSearching,
}) {
  return (
    <div className="nav" style={isSearching ? { pointerEvents: "none" } : {}}>
      <div className="site_title" onClick={showMain}>
        <span>Yt</span> downld
      </div>
      <div className="site_pref">
        <div
          onClick={switchTheme}
          className={`site_theme ${dark ? "dark" : ""}`}
        ></div>
        <div className="pref" onClick={() => setPref(true)}>
          <i className="ri-settings-6-fill"></i>
        </div>
      </div>
    </div>
  );
}
